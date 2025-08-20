export type Room = {
	id: number;
	name: string;
	roomClass: string;
	shapes: "square" | "L-shape" | "polygon";
	parameters: number[];
	fill: string;
};
export type Floor = { id: number; rooms: Room[] };
export type Building = { id: number; name: string; floors: Floor[] };
export const buildings: Building[] = [
	{
		id: 1,
		name: "南館",
		floors: [
			{
				id: 1,
				rooms: [
					{
						id: 1,
						name: "廊下",
						roomClass: "廊下",
						fill: "red",
						shapes: "square",
						parameters: [360, 0, 1210, 60],
					},
					{
						id: 2,
						name: "廊下",
						roomClass: "廊下",
						fill: "blue",
						shapes: "square",
						parameters: [980, 0, 160, 240],
					},
				],
			},
			{
				id: 2,
				rooms: [
					{
						id: 1,
						name: "リフレッシュ室",
						roomClass: "",
						fill: "lightblue",
						shapes: "square",
						parameters: [330, 1870, 150, 180],
					},
					{
						id: 2,
						name: "堀研究室",
						roomClass: "研究室",
						fill: "lightblue",
						shapes: "square",
						parameters: [560, 1930, 90, 120],
					},
				],
			},
		],
	},
	{
		id: 2,
		name: "北館",
		floors: [
			{
				id: 1,
				rooms: [
					{
						id: 1,
						name: "test",
						roomClass: "",
						fill: "lightblue",
						shapes: "square",
						parameters: [360, 0, 1210, 60],
					},
				],
			},
			{
				id: 1,
				rooms: [
					{
						id: 1,
						name: "test",
						roomClass: "",
						fill: "lightblue",
						shapes: "square",
						parameters: [360, 60, 1210, 60],
					},
				],
			},
		],
	},
];
