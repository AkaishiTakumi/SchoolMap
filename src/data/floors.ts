export type Room = {
    id: string;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
};

export type Floor = {
    id: number;
    name: string;
    rooms: Room[];
    corridorType: "H" | "T"; // H:北館と南館と渡り廊下, T:南館のみ
};

export const floors: Floor[] = [
    {
        id: 1,
        name: "1階",
        corridorType: "H",
        rooms: [
            { id: "101", name: "北館 101", x: 30, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "102", name: "北館 102", x: 130, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "lab", name: "理科室", x: 230, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "103", name: "南館 103", x: 30, y: 200, width: 40, height: 40, fill: "lightblue" },
            { id: "IshidaLab", name: "石田研究室", x: 130, y: 200, width: 40, height: 40, fill: "lightblue" },
            { id: "entrance", name: "玄関", x: 100, y: 270, width: 80, height: 30, fill: "brown" },
        ],
    },
    {
        id: 2,
        name: "2階",
        corridorType: "H",
        rooms: [
            { id: "201", name: "北館 201", x: 30, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "KamiyaLab", name: "神谷研究室", x: 130, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "library", name: "図書室", x: 230, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "YamaguchiYumiLab", name: "山口(裕)研究室", x: 30, y: 200, width: 40, height: 40, fill: "lightblue" },
            { id: "TeramotoLab", name: "寺元研究室", x: 130, y: 200, width: 40, height: 40, fill: "lightblue" },
        ],
    },
    {
        id: 3,
        name: "3階",
        corridorType: "H",
        rooms: [
            { id: "301", name: "北館 301", x: 30, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "302", name: "北館 302", x: 130, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "music", name: "音楽室", x: 230, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "NishikawaLab", name: "西川研究室", x: 30, y: 200, width: 40, height: 40, fill: "lightblue" },
            { id: "WatanabeLab", name: "渡邊研究室", x: 130, y: 200, width: 40, height: 40, fill: "lightblue" },
        ],
    },
    {
        id: 4,
        name: "4階",
        corridorType: "T",
        rooms: [
            { id: "Sabashitu", name: "端末サーバ室", x: 30, y: 200, width: 40, height: 40, fill: "lightblue" },
            { id: "YamaguchiHitoshiLab", name: "山口(均)研究室", x: 130, y: 200, width: 40, height: 40, fill: "lightblue" },
        ],
    },
    /**まだ書ききれていないフロアや部屋がある */
];
