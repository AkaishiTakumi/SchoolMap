

export type Room = {
	id: number;
	name: string;
	roomClass: "ホームルーム" | "研究室" | "卒研室" | "WC" | "";
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
						name: "控室",
						roomClass: "",
						shapes: "square",
						parameters: [220, 690, 50, 60],
						fill: "lightblue"
					},
					{
						id: 2,
						name: "女性教員用WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [270, 720, 30, 30],
						fill: "pink"
					},
					{
						id: 3,
						name: "総務課事務室",
						roomClass: "",
						shapes: "square",
						parameters: [300, 670, 140, 80],
						fill: "lightblue"
					},
					{
						id: 4,
						name: "マルチパーパスルーム（情報）",
						roomClass: "",
						shapes: "square",
						parameters: [490, 670, 140, 80],
						fill: "lightblue"
					},
					{
						id: 5,
						name: "男子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 370, 40, 30],
						fill: "pink"
					},
					{
						id: 6,
						name: "女子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 400, 40, 10],
						fill: "pink"
					},
					{
						id: 7,
						name: "多目的WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 410, 20, 20],
						fill: "pink"
					},
					{
						id: 8,
						name: "準備室",
						roomClass: "",
						shapes: "square",
						parameters: [450, 460, 60, 30],
						fill: "lightblue"
					},
					{
						id: 9,
						name: "マルチパーパスルーム（ものづくり）",
						roomClass: "",
						shapes: "square",
						parameters: [450, 490, 60, 120],
						fill: "lightblue"
					},
					{
						id: 10,
						name: "外来者用WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 610, 60, 30],
						fill: "pink"
					},
					{
						id: 11,
						name: "材料力学第1実験室",
						roomClass: "",
						shapes: "square",
						parameters: [200, 350, 60, 80],
						fill: "lightblue"
					},
					{
						id: 12,
						name: "塩田研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [260, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id: 13,
						name: "機械卒研室",
						roomClass: "卒研室",
						shapes: "square",
						parameters: [290, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id: 14,
						name: "教室4ーM",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [320, 370, 90, 60],
						fill: "lightblue"
					},
					{
						id: 15,
						name: "電気室",
						roomClass: "",
						shapes: "square",
						parameters: [410, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id: 16,
						name: "教室3ーS",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [490, 370, 90, 60],
						fill: "lightblue"
					},
					{
						id: 17,
						name: "廣木研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [580, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id: 18,
						name: "関研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [610, 390, 30, 40],
						fill: "lightblue"
					},
					{
						id: 19,
						name: "材料実験室",
						roomClass: "",
						shapes: "square",
						parameters: [610, 350, 90, 40],
						fill: "lightblue"
					},
					{
						id: 20,
						name: "材料力学第2実験室",
						roomClass: "",
						shapes: "square",
						parameters: [700, 335, 30, 95],
						fill: "lightblue"
					},
					{
						id: 21,
						name: "精密工作実験室",
						roomClass: "",
						shapes: "square",
						parameters: [730, 390, 30, 40],
						fill: "lightblue"
					},
					{
						id: 22,
						name: "男子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 110, 40, 30],
						fill: "pink"
					},
					{
						id: 23,
						name: "女子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 140, 40, 30],
						fill: "pink"
					},
					{
						id: 24,
						name: "生命工学実験室",
						roomClass: "",
						shapes: "square",
						parameters: [450, 170, 60, 30],
						fill: "lightblue"
					},
					{
						id: 25,
						name: "前澤研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [450, 200, 60, 30],
						fill: "lightblue"
					},
					{
						id: 26,
						name: "マルチパーパスルーム（生物）",
						roomClass: "",
						shapes: "square",
						parameters: [450, 230, 60, 120],
						fill: "lightblue"
					},
					{
						id: 27,
						name: "流体第1実験室",
						roomClass: "",
						shapes: "square",
						parameters: [110, 60, 120, 50],
						fill: "lightblue"
					},
					{
						id: 28,
						name: "流体準備室",
						roomClass: "",
						shapes: "square",
						parameters: [200, 110, 30, 30],
						fill: "lightblue"
					},
					{
						id: 29,
						name: "加藤研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [230, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id: 30,
						name: "山田（貴）研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [260, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id: 31,
						name: "高木研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [290, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id: 32,
						name: "小西研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [320, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id: 33,
						name: "構造生物学実験室",
						roomClass: "",
						shapes: "square",
						parameters: [350, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id: 34,
						name: "柴田研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [380, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id: 35,
						name: "西川研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [410, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id: 36,
						name: "教室4ーS",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [490, 80, 90, 60],
						fill: "lightblue"
					},
					{
						id: 37,
						name: "分子分光学実験室",
						roomClass: "",
						shapes: "square",
						parameters: [580, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id: 38,
						name: "分子生物学実験室",
						roomClass: "",
						shapes: "square",
						parameters: [610, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id: 39,
						name: "電気機械実験室",
						roomClass: "",
						shapes: "square",
						parameters: [640, 60, 120, 80],
						fill: "lightblue"
					},
				],
			},



			{
				id: 2,
				rooms: [
					{
						id:1,
						name: "リフレッシュ室",
						roomClass: "",
						shapes: "square",
						parameters: [220, 690, 50, 60],
						fill: "lightblue"
					},
					{
						id:2,
						name: "堀研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [300, 710, 30, 40],
						fill: "lightblue"
					},
					{
						id:3,
						name: "角谷研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [330, 710, 30, 40],
						fill: "lightblue"
					},
					{
						id:4,
						name: "パーマー研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [360, 710, 30, 40],
						fill: "lightblue"
					},
					{
						id:5,
						name: "事務部長室",
						roomClass: "",
						shapes: "square",
						parameters: [390, 690, 30, 60],
						fill: "lightblue"
					},
					{
						id:6,
						name: "応接・会議室",
						roomClass: "",
						shapes: "square",
						parameters: [420, 690, 30, 60],
						fill: "lightblue"
					},
					{
						id:7,
						name: "秘書室",
						roomClass: "",
						shapes: "square",
						parameters: [450, 690, 30, 60],
						fill: "lightblue"
					},
					{
						id:8,
						name: "校長室",
						roomClass: "",
						shapes: "square",
						parameters: [480, 690, 60, 60],
						fill: "lightblue"
					},
					{
						id:9,
						name: "会議室",
						roomClass: "",
						shapes: "square",
						parameters: [540, 670, 90, 80],
						fill: "lightblue"
					},
					{
						id:10,
						name: "男子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 370, 40, 30],
						fill: "pink"
					},
					{
						id:11,
						name: "女子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 400, 40, 10],
						fill: "pink"
					},
					{
						id:12,
						name: "多目的WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 410, 20, 20],
						fill: "pink"
					},
					{
						id:13,
						name: "香取研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [450, 460, 60, 30],
						fill: "lightblue"
					},
					{
						id:14,
						name: "香取卒研室",
						roomClass: "卒研室",
						shapes: "square",
						parameters: [450, 490, 60, 30],
						fill: "lightblue"
					},
					{
						id:15,
						name: "計測実験室",
						roomClass: "",
						shapes: "square",
						parameters: [450, 520, 60, 90],
						fill: "lightblue"
					},
					{
						id:16,
						name: "WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 610, 60, 30],
						fill: "pink"
					},
					{
						id:17,
						name: "教室1ー1",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [200, 370, 90, 60],
						fill: "lightblue"
					},
					{
						id:18,
						name: "守友研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [290, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id:19,
						name: "神谷研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [320, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id:20,
						name: "教室1ー2",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [350, 370, 90, 60],
						fill: "lightblue"
					},
					{
						id:21,
						name: "SE系ほっとルーム",
						roomClass: "",
						shapes: "square",
						parameters: [490, 370, 60, 60],
						fill: "lightblue"
					},
					{
						id:22,
						name: "先進科学系卒研室1",
						roomClass: "",
						shapes: "square",
						parameters: [550, 370, 60, 60],
						fill: "lightblue"
					},
					{
						id:23,
						name: "中村（重）研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [610, 370, 50, 60],
						fill: "lightblue"
					},
					{
						id:24,
						name: "電気工作機械室",
						roomClass: "",
						shapes: "square",
						parameters: [660, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id:25,
						name: "電気工作実習室",
						roomClass: "",
						shapes: "square",
						parameters: [660, 350, 100, 20],
						fill: "lightblue"
					},
					{
						id:26,
						name: "男子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 110, 40, 30],
						fill: "pink"
					},
					{
						id:27,
						name: "女子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 140, 40, 30],
						fill: "pink"
					},
					{
						id:28,
						name: "女子更衣室",
						roomClass: "",
						shapes: "square",
						parameters: [450, 170, 60, 30],
						fill: "pink"
					},
					{
						id:29,
						name: "西尾研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [450, 200, 60, 30],
						fill: "lightblue"
					},
					{
						id:30,
						name: "西尾卒研室",
						roomClass: "卒研室",
						shapes: "square",
						parameters: [450, 230, 60, 30],
						fill: "lightblue"
					},
					{
						id:31,
						name: "電子物性実験室",
						roomClass: "",
						shapes: "square",
						parameters: [450, 260, 60, 60],
						fill: "lightblue"
					},
					{
						id:32,
						name: "暗室",
						roomClass: "",
						shapes: "square",
						parameters: [450, 320, 60, 30],
						fill: "lightblue"
					},
					{
						id:33,
						name: "第1共通実験室",
						roomClass: "",
						shapes: "square",
						parameters: [110, 60, 120, 80],
						fill: "lightblue"
					},
					{
						id:34,
						name: "A講義室",
						roomClass: "",
						shapes: "square",
						parameters: [230, 80, 60, 60],
						fill: "lightblue"
					},
					{
						id:35,
						name: "B講義室",
						roomClass: "",
						shapes: "square",
						parameters: [290, 80, 60, 60],
						fill: "lightblue"
					},
					{
						id:36,
						name: "教室1ー3",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [350, 80, 90, 60],
						fill: "lightblue"
					},
					{
						id:37,
						name: "教室1ー4",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [490, 80, 90, 60],
						fill: "lightblue"
					},
					{
						id:38,
						name: "中村（直）卒研室",
						roomClass: "卒研室",
						shapes: "square",
						parameters: [580, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:39,
						name: "中村（直）研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [610, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:40,
						name: "前原研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [640, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:41,
						name: "前原卒研室",
						roomClass: "卒研室",
						shapes: "square",
						parameters: [670, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:42,
						name: "嶋田卒研室",
						roomClass: "卒研室",
						shapes: "square",
						parameters: [700, 60, 60, 40],
						fill: "lightblue"
					},
					{
						id:43,
						name: "マイクロ波実験室",
						roomClass: "",
						shapes: "square",
						parameters: [700, 100, 30, 40],
						fill: "lightblue"
					},
					{
						id:44,
						name: "嶋田研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [730, 100, 30, 40],
						fill: "lightblue"
					},
				],
			},



			{
				id: 3,
				rooms: [
					{
						id:1,
						name: "横谷研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [220, 690, 30, 60],
						fill: "lightblue"
					},
					{
						id:2,
						name: "山中研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [250, 710, 30, 40],
						fill: "lightblue"
					},
					{
						id:3,
						name: "山口（裕）研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [300, 710, 30, 40],
						fill: "lightblue"
					},
					{
						id:4,
						name: "内倉研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [330, 710, 30, 40],
						fill: "lightblue"
					},
					{
						id:5,
						name: "江原研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [360, 710, 30, 40],
						fill: "lightblue"
					},
					{
						id:6,
						name: "島田研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [390, 690, 30, 60],
						fill: "lightblue"
					},
					{
						id:7,
						name: "松田研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [420, 690, 30, 60],
						fill: "lightblue"
					},
					{
						id:8,
						name: "ランボー研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [450, 690, 30, 60],
						fill: "lightblue"
					},
					{
						id:9,
						name: "荒木研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [480, 690, 30, 60],
						fill: "lightblue"
					},
					{
						id:10,
						name: "合併教室",
						roomClass: "",
						shapes: "square",
						parameters: [510, 670, 120, 80],
						fill: "lightblue"
					},
					{
						id:11,
						name: "男子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 370, 40, 30],
						fill: "pink"
					},
					{
						id:12,
						name: "女子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 400, 40, 10],
						fill: "pink"
					},
					{
						id:13,
						name: "多目的WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 410, 20, 20],
						fill: "pink"
					},
					{
						id:14,
						name: "準備室",
						roomClass: "",
						shapes: "square",
						parameters: [450, 460, 60, 30],
						fill: "lightblue"
					},
					{
						id:15,
						name: "化学実験室",
						roomClass: "",
						shapes: "square",
						parameters: [450, 490, 60, 120],
						fill: "lightblue"
					},
					{
						id:16,
						name: "WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 610, 60, 30],
						fill: "pink"
					},
					{
						id:17,
						name: "教室2ーE",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [200, 370, 90, 60],
						fill: "lightblue"
					},
					{
						id:18,
						name: "浅野研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [290, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id:19,
						name: "田村研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [320, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id:20,
						name: "教室2ーM",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [350, 370, 90, 60],
						fill: "lightblue"
					},
					{
						id:21,
						name: "教室2ーS",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [490, 370, 90, 60],
						fill: "lightblue"
					},
					{
						id:22,
						name: "谷口（圭）研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [580, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id:23,
						name: "佐々井研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [610, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id:24,
						name: "準備室",
						roomClass: "",
						shapes: "square",
						parameters: [640, 370, 30, 60],
						fill: "lightblue"
					},
					{
						id:25,
						name: "応用物理実験室",
						roomClass: "",
						shapes: "square",
						parameters: [670, 350, 90, 80],
						fill: "lightblue"
					},
					{
						id:26,
						name: "男子WC",
						roomClass: "WC",
						shapes: "square",
						parameters: [450, 110, 40, 30],
						fill: "pink"
					},
					{
						id:27,
						name: "C講義室",
						roomClass: "",
						shapes: "square",
						parameters: [110, 80, 60, 60],
						fill: "lightblue"
					},
					{
						id:28,
						name: "D講義室",
						roomClass: "",
						shapes: "square",
						parameters: [170, 80, 60, 60],
						fill: "lightblue"
					},
					{
						id:29,
						name: "八木卒研室",
						roomClass: "卒研室",
						shapes: "square",
						parameters: [230, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:30,
						name: "八木研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [260, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:31,
						name: "先進科学系卒研室２",
						roomClass: "",
						shapes: "square",
						parameters: [290, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:32,
						name: "先進科学系卒研室３",
						roomClass: "",
						shapes: "square",
						parameters: [320, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:33,
						name: "教室4ーE",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [350, 80, 90, 60],
						fill: "lightblue"
					},
					{
						id:34,
						name: "教室3ーE",
						roomClass: "ホームルーム",
						shapes: "square",
						parameters: [490, 80, 90, 60],
						fill: "lightblue"
					},
					{
						id:35,
						name: "リフレッシュ室",
						roomClass: "",
						shapes: "square",
						parameters: [580, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:36,
						name: "原田研究室",
						roomClass: "研究室",
						shapes: "square",
						parameters: [610, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:37,
						name: "原田卒研室",
						roomClass: "卒研室",
						shapes: "square",
						parameters: [640, 80, 30, 60],
						fill: "lightblue"
					},
					{
						id:38,
						name: "電磁気学応用実験室",
						roomClass: "",
						shapes: "square",
						parameters: [670, 60, 90, 80],
						fill: "lightblue"
					},
				],
			},
		],
	},
];
