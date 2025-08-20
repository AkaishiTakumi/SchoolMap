// scripts/generateRoomsTs.ts
import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { Building, Floor, Room } from "../src/data/rooms_base.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type RawRow = {
	buildingId: number;
	buildingName: string;
	floorId: number;
	roomId: number;
	roomName: string;
	roomClass: string;
	fill: string;
	shape: 'square' | 'L-shape' | 'polygon';
	parameters: string;
};

function readExcel(): RawRow[] {
	const inputFile: string = path.resolve(__dirname, '../rooms.xlsx');

	// ファイルが存在するか確認
	if (!fs.existsSync(inputFile)) {
		throw new Error(`ファイルが見つかりません: ${inputFile}`);
	}

	const workbook = XLSX.read(inputFile, { type: "file" });

	// 最初のシート名を取得
	const sheetName = workbook.SheetNames[0];

	// シートの内容を JSON に変換
	return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);;
}

function generateTs(
	buildings: Building[]
): Promise<{ error: { message: string } | null }> {
	const out = `export type Room={id:number;name:string;roomClass:string;shapes:"square"|"L-shape"|"polygon";parameters:number[];fill:string;};export type Floor={id:number;rooms:Room[];};export type Building={id:number;name:string;floors:Floor[];};
export const buildings: Building[] = ${JSON.stringify(buildings, null, 2)};\n`;
	return new Promise((resolve) => {
		fs.writeFile(path.resolve(__dirname, '../src/data/rooms.ts'), out, (err) => {
			if (err) {
				resolve({ error: { message: err.message } });
			} else {
				resolve({ error: null });
			}
		});
	});
}

function buildData(rows: RawRow[]): Building[] {
	const map: Record<number, Building> = {};
	rows.forEach(r => {
		if (!map[r.buildingId]) {
			map[r.buildingId] = { id: r.buildingId, name: r.buildingName, floors: [] }
		}
		const building = map[r.buildingId];
		let floor = building.floors.find(f => f.id === r.floorId);
		if (!floor) {
			floor = { id: r.floorId, rooms: [] };
			building.floors.push(floor);
		}
		const room: Room = {
			id: r.roomId,
			name: r.roomName,
			roomClass: (r.roomClass || '') as Room['roomClass'],
			fill: r.fill,
			shapes: r.shape,
			parameters: r.parameters.split(",").map(Number)
		};
		floor.rooms.push(room);
	});

	// floors の順序保証（必要ならソート）
	return Object.values(map);
}


async function main() {
	const sheetData = readExcel();
	console.dir(sheetData);
	const buildings = buildData(sheetData);
	generateTs(buildings);
	console.log('✅ rooms.ts を生成しました');
}

main().catch(console.error);