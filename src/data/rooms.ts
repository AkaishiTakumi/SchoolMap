export type Room = {
    id: string;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
};

export type Group = {
    id: string;
    name: string;
    rooms: Room[];
};

export type Floor = {
    id: string;
    name: string;
    groups: Group[];
};

export type Block = {
    id: string;
    name: string;
    groups: Group[];
};

export const groups: Group[] = [
    {
        id: "SA1",
        name: "南館A棟1階",
        rooms: [
            {
                id: "SA101", name: "控室",
                x: 220, y: 690, width: 50, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA102", name: "女性教員用WC",
                x: 270, y: 720, width: 30, height: 30,
                fill: "pink"
            },
            {
                id: "SA103", name: "総務課事務室",
                x: 300, y: 670, width: 140, height: 80,
                fill: "lightblue"
            },
            {
                id: "SA104", name: "マルチパーパスルーム（情報）",
                x: 490, y: 670, width: 140, height: 80,
                fill: "lightblue"
            },
        ],
    },
    {
        id: "SB1",
        name: "南館B棟1階",
        rooms: [
            {
                id: "SB101", name: "男子WC",
                x: 450, y: 370, width: 40, height: 30,
                fill: "pink"
            },
            {
                id: "SB102", name: "女子WC",
                x: 450, y: 400, width: 40, height: 10,
                fill: "pink"
            },
            {
                id: "SB103", name: "多目的WC",
                x: 450, y: 410, width: 20, height: 20,
                fill: "pink"
            },
            {
                id: "SB104", name: "準備室",
                x: 450, y: 460, width: 60, height: 30,
                fill: "lightblue"
            },
            {
                id: "SB105", name: "マルチパーパスルーム（ものづくり）",
                x: 450, y: 490, width: 60, height: 120,
                fill: "lightblue"
            },
            {
                id: "SB106", name: "外来者用WC",
                x: 450, y: 610, width: 60, height: 30,
                fill: "pink"
            },
        ]
    },
    {
        id: "SC1",
        name: "南館C棟1階",
        rooms: [
            {
                id: "SC101", name: "材料力学第1実験室",
                x: 200, y: 350, width: 60, height: 80,
                fill: "lightblue"
            },
            {
                id: "SC102", name: "塩田研究室",
                x: 260, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC103", name: "機械卒研室",
                x: 290, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC104", name: "教室4ーM",
                x: 320, y: 370, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC105", name: "電気室",
                x: 410, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC106", name: "教室3ーS",
                x: 490, y: 370, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC107", name: "廣木研究室",
                x: 580, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC108", name: "関研究室",
                x: 610, y: 390, width: 30, height: 40,
                fill: "lightblue"
            },
            {
                id: "SC109", name: "材料実験室",
                x: 610, y: 350, width: 90, height: 40,
                fill: "lightblue"
            },
            {
                id: "SC110", name: "材料力学第2実験室",
                x: 700, y: 335, width: 30, height: 95,
                fill: "lightblue"
            },
            {
                id: "SC111", name: "精密工作実験室",
                x: 730, y: 390, width: 30, height: 40,
                fill: "lightblue"
            },
        ]
    },
    {
        id: "SD1",
        name: "南館D棟1階",
        rooms: [
            {
                id: "SD101", name: "男子WC",
                x: 450, y: 110, width: 40, height: 30,
                fill: "pink"
            },
            {
                id: "SD102", name: "女子WC",
                x: 450, y: 140, width: 40, height: 30,
                fill: "pink"
            },
            {
                id: "SD103", name: "生命工学実験室",
                x: 450, y: 170, width: 60, height: 30,
                fill: "lightblue"
            },
            {
                id: "SD104", name: "前澤研究室",
                x: 450, y: 200, width: 60, height: 30,
                fill: "lightblue"
            },
            {
                id: "SD105", name: "マルチパーパスルーム（生物）",
                x: 450, y: 230, width: 60, height: 120,
                fill: "lightblue"
            },
        ]
    },
    {
        id: "SE1",
        name: "南館E棟1階",
        rooms: [
            {
                id: "SE101", name: "流体第1実験室",
                x: 110, y: 60, width: 120, height: 50,
                fill: "lightblue"
            },
            {
                id: "SE102", name: "流体準備室",
                x: 200, y: 110, width: 30, height: 30,
                fill: "lightblue"
            },
            {
                id: "SE103", name: "加藤研究室",
                x: 230, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE104", name: "山田（貴）研究室",
                x: 260, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE105", name: "高木研究室",
                x: 290, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE106", name: "小西研究室",
                x: 320, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE107", name: "構造生物学実験室",
                x: 350, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE108", name: "柴田研究室",
                x: 380, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE109", name: "西川研究室",
                x: 410, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE110", name: "教室4ーS",
                x: 490, y: 80, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE111", name: "分子分光学実験室",
                x: 580, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE112", name: "分子生物学実験室",
                x: 610, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE113", name: "電気機械実験室",
                x: 640, y: 60, width: 120, height: 80,
                fill: "lightblue"
            },
        ]
    },



    {
        id: "SA2",
        name: "南館A棟2階",
        rooms: [
            {
                id: "SA201", name: "リフレッシュ室",
                x: 220, y: 690, width: 50, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA202", name: "堀研究室",
                x: 300, y: 710, width: 30, height: 40,
                fill: "lightblue"
            },
            {
                id: "SA203", name: "角谷研究室",
                x: 330, y: 710, width: 30, height: 40,
                fill: "lightblue"
            },
            {
                id: "SA204", name: "パーマー研究室",
                x: 360, y: 710, width: 30, height: 40,
                fill: "lightblue"
            },
            {
                id: "SA205", name: "事務部長室",
                x: 390, y: 690, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA206", name: "応接・会議室",
                x: 420, y: 690, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA207", name: "秘書室",
                x: 450, y: 690, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA208", name: "校長室",
                x: 480, y: 690, width: 60, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA209", name: "会議室",
                x: 540, y: 670, width: 90, height: 80,
                fill: "lightblue"
            },
        ],
    },
    {
        id: "SB2",
        name: "南館B棟2階",
        rooms: [
            {
                id: "SB201", name: "男子WC",
                x: 450, y: 370, width: 40, height: 30,
                fill: "pink"
            },
            {
                id: "SB202", name: "女子WC",
                x: 450, y: 400, width: 40, height: 10,
                fill: "pink"
            },
            {
                id: "SB203", name: "多目的WC",
                x: 450, y: 410, width: 20, height: 20,
                fill: "pink"
            },
            {
                id: "SB204", name: "香取研究室",
                x: 450, y: 460, width: 60, height: 30,
                fill: "lightblue"
            },
            {
                id: "SB205", name: "香取卒研室",
                x: 450, y: 490, width: 60, height: 30,
                fill: "lightblue"
            },
            {
                id: "SB206", name: "計測実験室",
                x: 450, y: 520, width: 60, height: 90,
                fill: "lightblue"
            },
            {
                id: "SB207", name: "WC",
                x: 450, y: 610, width: 60, height: 30,
                fill: "pink"
            },
        ]
    },
    {
        id: "SC2",
        name: "南館C棟2階",
        rooms: [
            {
                id: "SC201", name: "教室1ー1",
                x: 200, y: 370, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC202", name: "守友研究室",
                x: 290, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC203", name: "神谷研究室",
                x: 320, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC204", name: "教室1ー2",
                x: 350, y: 370, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC206", name: "SE系ほっとルーム",
                x: 490, y: 370, width: 60, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC207", name: "先進科学系卒研室1",
                x: 550, y: 370, width: 60, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC208", name: "中村（重）研究室",
                x: 610, y: 370, width: 50, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC209", name: "電気工作機械室",
                x: 660, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC210", name: "電気工作実習室",
                x: 660, y: 350, width: 100, height: 20,
                fill: "lightblue"
            },
        ]
    },
    {
        id: "SD2",
        name: "南館D棟2階",
        rooms: [
            {
                id: "SD201", name: "男子WC",
                x: 450, y: 110, width: 40, height: 30,
                fill: "pink"
            },
            {
                id: "SD202", name: "女子WC",
                x: 450, y: 140, width: 40, height: 30,
                fill: "pink"
            },
            {
                id: "SD203", name: "女子更衣室",
                x: 450, y: 170, width: 60, height: 30,
                fill: "pink"
            },
            {
                id: "SD204", name: "西尾研究室",
                x: 450, y: 200, width: 60, height: 30,
                fill: "lightblue"
            },
            {
                id: "SD205", name: "西尾卒研室",
                x: 450, y: 230, width: 60, height: 30,
                fill: "lightblue"
            },
            {
                id: "SD206", name: "電子物性実験室",
                x: 450, y: 260, width: 60, height: 60,
                fill: "lightblue"
            },
            {
                id: "SD207", name: "暗室",
                x: 450, y: 320, width: 60, height: 30,
                fill: "lightblue"
            },
        ]
    },
    {
        id: "SE2",
        name: "南館E棟2階",
        rooms: [
            {
                id: "SE201", name: "第1共通実験室",
                x: 110, y: 60, width: 120, height: 80,
                fill: "lightblue"
            },
            {
                id: "SE203", name: "A講義室",
                x: 230, y: 80, width: 60, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE205", name: "B講義室",
                x: 290, y: 80, width: 60, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE207", name: "教室1ー3",
                x: 350, y: 80, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE210", name: "教室1ー4",
                x: 490, y: 80, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE211", name: "中村（直）卒研室",
                x: 580, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE212", name: "中村（直）研究室",
                x: 610, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE213", name: "前原研究室",
                x: 640, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE214", name: "前原卒研室",
                x: 670, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE215", name: "嶋田卒研室",
                x: 700, y: 60, width: 60, height: 40,
                fill: "lightblue"
            },
            {
                id: "SE216", name: "マイクロ波実験室",
                x: 700, y: 100, width: 30, height: 40,
                fill: "lightblue"
            },
            {
                id: "SE217", name: "嶋田研究室",
                x: 730, y: 100, width: 30, height: 40,
                fill: "lightblue"
            },
        ]
    },



    {
        id: "SA3",
        name: "南館A棟3階",
        rooms: [
            {
                id: "SA301", name: "横谷研究室",
                x: 220, y: 690, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA302", name: "山中研究室",
                x: 250, y: 710, width: 30, height: 40,
                fill: "lightblue"
            },
            {
                id: "SA303", name: "山口（裕）研究室",
                x: 300, y: 710, width: 30, height: 40,
                fill: "lightblue"
            },
            {
                id: "SA304", name: "内倉研究室",
                x: 330, y: 710, width: 30, height: 40,
                fill: "lightblue"
            },
            {
                id: "SA305", name: "江原研究室",
                x: 360, y: 710, width: 30, height: 40,
                fill: "lightblue"
            },
            {
                id: "SA306", name: "島田研究室",
                x: 390, y: 690, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA307", name: "松田研究室",
                x: 420, y: 690, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA308", name: "ランボー研究室",
                x: 450, y: 690, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA309", name: "荒木研究室",
                x: 480, y: 690, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SA310", name: "合併教室",
                x: 510, y: 670, width: 120, height: 80,
                fill: "lightblue"
            },
        ],
    },
    {
        id: "SB3",
        name: "南館B棟3階",
        rooms: [
            {
                id: "SB301", name: "男子WC",
                x: 450, y: 370, width: 40, height: 30,
                fill: "pink"
            },
            {
                id: "SB302", name: "女子WC",
                x: 450, y: 400, width: 40, height: 10,
                fill: "pink"
            },
            {
                id: "SB303", name: "多目的WC",
                x: 450, y: 410, width: 20, height: 20,
                fill: "pink"
            },
            {
                id: "SB304", name: "準備室",
                x: 450, y: 460, width: 60, height: 30,
                fill: "lightblue"
            },
            {
                id: "SB306", name: "化学実験室",
                x: 450, y: 490, width: 60, height: 120,
                fill: "lightblue"
            },
            {
                id: "SB307", name: "WC",
                x: 450, y: 610, width: 60, height: 30,
                fill: "pink"
            },
        ]
    },
    {
        id: "SC3",
        name: "南館C棟3階",
        rooms: [
            {
                id: "SC301", name: "教室2ーE",
                x: 200, y: 370, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC302", name: "浅野研究室",
                x: 290, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC303", name: "田村研究室",
                x: 320, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC304", name: "教室2ーM",
                x: 350, y: 370, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC306", name: "教室2ーS",
                x: 490, y: 370, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC307", name: "谷口（圭）研究室",
                x: 580, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC308", name: "佐々井研究室",
                x: 610, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC309", name: "準備室",
                x: 640, y: 370, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SC310", name: "応用物理実験室",
                x: 670, y: 350, width: 90, height: 80,
                fill: "lightblue"
            },
        ]
    },
    {
        id: "SD3",
        name: "南館D棟3階",
        rooms: [
            {
                id: "SD301", name: "男子WC",
                x: 450, y: 110, width: 40, height: 30,
                fill: "pink"
            },
        ]
    },
    {
        id: "SE3",
        name: "南館E棟3階",
        rooms: [
            {
                id: "SE301", name: "C講義室",
                x: 110, y: 80, width: 60, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE303", name: "D講義室",
                x: 170, y: 80, width: 60, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE304", name: "八木卒研室",
                x: 230, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE305", name: "八木研究室",
                x: 260, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE306", name: "先進科学系卒研室２",
                x: 290, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE307", name: "先進科学系卒研室３",
                x: 320, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE308", name: "教室4ーE",
                x: 350, y: 80, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE310", name: "教室3ーE",
                x: 490, y: 80, width: 90, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE311", name: "リフレッシュ室",
                x: 580, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE312", name: "原田研究室",
                x: 610, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE313", name: "原田卒研室",
                x: 640, y: 80, width: 30, height: 60,
                fill: "lightblue"
            },
            {
                id: "SE315", name: "電磁気学応用実験室",
                x: 670, y: 60, width: 90, height: 80,
                fill: "lightblue"
            },
        ]
    },
];

export const floors: Floor[] = [
    {
        id: "S1",
        name: "南館1階",
        groups: [
            groups.find((group) => group.id === "SA1")!,
            groups.find((group) => group.id === "SB1")!,
            groups.find((group) => group.id === "SC1")!,
            groups.find((group) => group.id === "SD1")!,
            groups.find((group) => group.id === "SE1")!,
        ],
    },
    {
        id: "S2",
        name: "南館2階",
        groups: [
            groups.find((group) => group.id === "SA2")!,
            groups.find((group) => group.id === "SB2")!,
            groups.find((group) => group.id === "SC2")!,
            groups.find((group) => group.id === "SD2")!,
            groups.find((group) => group.id === "SE2")!,
        ],
    },
    {
        id: "S3",
        name: "南館3階",
        groups: [
            groups.find((group) => group.id === "SA3")!,
            groups.find((group) => group.id === "SB3")!,
            groups.find((group) => group.id === "SC3")!,
            groups.find((group) => group.id === "SD3")!,
            groups.find((group) => group.id === "SE3")!,
        ],
    },
    /**まだ書ききれていないフロアや部屋がある */
];

export const blocks: Block[] = [
    {
        id: "A",
        name: "A棟",
        groups: [
            groups.find((group) => group.id === "SA1")!,
            groups.find((group) => group.id === "SA2")!,
            groups.find((group) => group.id === "SA3")!,
        ],
    },
    {
        id: "B",
        name: "B棟",
        groups: [
            groups.find((group) => group.id === "SB1")!,
            groups.find((group) => group.id === "SB2")!,
            groups.find((group) => group.id === "SB3")!,
        ],
    },
    {
        id: "C",
        name: "C棟",
        groups: [
            groups.find((group) => group.id === "SC1")!,
            groups.find((group) => group.id === "SC2")!,
            groups.find((group) => group.id === "SC3")!,
        ],
    },
    {
        id: "D",
        name: "D棟",
        groups: [
            groups.find((group) => group.id === "SD1")!,
            groups.find((group) => group.id === "SD2")!,
            groups.find((group) => group.id === "SD3")!,
        ],
    },
    {
        id: "E",
        name: "E棟",
        groups: [
            groups.find((group) => group.id === "SE1")!,
            groups.find((group) => group.id === "SE2")!,
            groups.find((group) => group.id === "SE3")!,
        ],
    },
];