// scripts/generateRoomsXlsx.ts
import * as XLSX from "xlsx";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from 'url';
import { buildings } from "../src/data/rooms_backup";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Excel に書き出す「行」の型定義
type RawRow = {
  buildingId: number;
  buildingName: string;
  floorId: number;
  roomId: number;
  roomName: string;
  roomClass: string;
  shape: "square" | "L-shape" | "polygon";
  parameters: string; // カンマ区切り文字列
  fill: string;
};

/**
 * Building[] を平坦化して RawRow[] を作成
 */
function buildRows(data: typeof buildings): RawRow[] {
  const rows: RawRow[] = [];

  data.forEach((b) => {
    b.floors.forEach((f) => {
      f.rooms.forEach((r) => {
        rows.push({
          buildingId: b.id,
          buildingName: b.name,
          floorId: f.id,
          roomId: r.id,
          roomName: r.name,
          fill: r.fill,
          roomClass: r.roomClass,
          shape: r.shapes,
          parameters: r.parameters.join(","),
        });
      });
    });
  });

  return rows;
}

/**
 * RawRow[] を Excel ファイルに書き出し
 */
function generateExcel(rows: RawRow[]) {
  // ワークブックとワークシートの作成
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows, {
    header: [
      "buildingId",
      "buildingName",
      "floorId",
      "roomId",
      "roomName",
      "roomClass",
      "fill",
      "shape",
      "parameters",
    ],
  });

  // シート名は「Rooms」
  XLSX.utils.book_append_sheet(wb, ws, "Rooms");

  // 出力先
  const outFileName="rooms.xlsx";
  const outFile = path.resolve(__dirname, "../",outFileName);
  XLSX.writeFile(wb, outFile);
  console.log(`✅ ${outFileName} を生成しました`);
}

async function main() {
  // rooms.ts の buildings を読み込んで行データに変換
  const rows = buildRows(buildings);
  generateExcel(rows);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
