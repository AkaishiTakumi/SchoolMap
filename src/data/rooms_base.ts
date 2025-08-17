export type Room = {
	id: number;
	name: string;
	roomClass: "ホームルーム" | "研究室" | "卒研室" | "WC" | "廊下" | "";
	shapes: "square" | "L-shape" | "polygon";
	parameters: number[];
	fill: string;
};

export type Floor = {
	id: number;
	rooms: Room[];
};

export type Building = {
	id: number;
	name: string;
	floors: Floor[];
};