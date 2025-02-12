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
    corridorType: "H" | "T";
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
            { id: "104", name: "南館 104", x: 130, y: 200, width: 40, height: 40, fill: "lightblue" },
            { id: "entrance", name: "玄関", x: 100, y: 270, width: 80, height: 30, fill: "brown" },
        ],
    },
    {
        id: 2,
        name: "2階",
        corridorType: "H",
        rooms: [
            { id: "201", name: "北館 201", x: 30, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "202", name: "北館 202", x: 130, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "library", name: "図書室", x: 230, y: 50, width: 40, height: 40, fill: "lightblue" },
            { id: "203", name: "南館 203", x: 30, y: 200, width: 40, height: 40, fill: "lightblue" },
            { id: "204", name: "南館 204", x: 130, y: 200, width: 40, height: 40, fill: "lightblue" },
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
            { id: "303", name: "南館 303", x: 30, y: 200, width: 40, height: 40, fill: "lightblue" },
            { id: "304", name: "南館 304", x: 130, y: 200, width: 40, height: 40, fill: "lightblue" },
        ],
    },
    {
        id: 4,
        name: "4階",
        corridorType: "T",
        rooms: [
            { id: "401", name: "南館 401", x: 100, y: 150, width: 40, height: 40, fill: "lightblue" },
        ],
    },
];
