export type Room={id:number;name:string;roomClass:"ホームルーム"|"研究室"|"卒研室"|"WC"|"廊下"|"";shapes:"square"|"L-shape"|"polygon";parameters:number[];fill:string;};export type Floor={id:number;rooms:Room[];};export type Building={id:number;name:string;floors:Floor[];};
export const buildings: Building[] = [
  {
    "id": 1,
    "name": "南館",
    "floors": [
      {
        "id": 1,
        "rooms": [
          {
            "id": 1,
            "name": "控室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              330,
              1870,
              150,
              180
            ]
          },
          {
            "id": 2,
            "name": "女性教員用WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              470,
              1960,
              90,
              90
            ]
          },
          {
            "id": 3,
            "name": "総務課事務室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              560,
              1810,
              420,
              240
            ]
          },
          {
            "id": 4,
            "name": "マルチパーパスルーム（情報）",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1140,
              1810,
              410,
              240
            ]
          },
          {
            "id": 5,
            "name": "男子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              920,
              130,
              90
            ]
          },
          {
            "id": 6,
            "name": "女子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              1010,
              130,
              30
            ]
          },
          {
            "id": 7,
            "name": "多目的WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              1040,
              60,
              60
            ]
          },
          {
            "id": 8,
            "name": "準備室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              1190,
              180,
              90
            ]
          },
          {
            "id": 9,
            "name": "マルチパーパスルーム（ものづくり）",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              1280,
              180,
              360
            ]
          },
          {
            "id": 10,
            "name": "外来者用WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              1630,
              180,
              90
            ]
          },
          {
            "id": 11,
            "name": "材料力学第1実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              270,
              860,
              180,
              240
            ]
          },
          {
            "id": 12,
            "name": "塩田研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              450,
              920,
              90,
              180
            ]
          },
          {
            "id": 13,
            "name": "機械卒研室",
            "roomClass": "卒研室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              530,
              920,
              90,
              180
            ]
          },
          {
            "id": 14,
            "name": "教室4ーM",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              620,
              920,
              270,
              180
            ]
          },
          {
            "id": 15,
            "name": "電気室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              890,
              920,
              90,
              180
            ]
          },
          {
            "id": 16,
            "name": "教室3ーS",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1140,
              920,
              260,
              180
            ]
          },
          {
            "id": 17,
            "name": "廣木研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1400,
              920,
              90,
              180
            ]
          },
          {
            "id": 18,
            "name": "関研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1480,
              980,
              90,
              120
            ]
          },
          {
            "id": 19,
            "name": "材料実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1480,
              860,
              270,
              120
            ]
          },
          {
            "id": 20,
            "name": "材料力学第2実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1750,
              820,
              90,
              280
            ]
          },
          {
            "id": 21,
            "name": "精密工作実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1840,
              980,
              90,
              120
            ]
          },
          {
            "id": 22,
            "name": "男子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              150,
              130,
              90
            ]
          },
          {
            "id": 23,
            "name": "女子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              240,
              130,
              90
            ]
          },
          {
            "id": 24,
            "name": "生命工学実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              330,
              180,
              90
            ]
          },
          {
            "id": 25,
            "name": "前澤研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              420,
              180,
              90
            ]
          },
          {
            "id": 26,
            "name": "マルチパーパスルーム（生物）",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              500,
              180,
              360
            ]
          },
          {
            "id": 27,
            "name": "流体第1実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              0,
              0,
              360,
              150
            ]
          },
          {
            "id": 28,
            "name": "流体準備室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              270,
              150,
              90,
              90
            ]
          },
          {
            "id": 29,
            "name": "加藤研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              360,
              60,
              90,
              180
            ]
          },
          {
            "id": 30,
            "name": "山田（貴）研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              450,
              60,
              90,
              180
            ]
          },
          {
            "id": 31,
            "name": "高木研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              530,
              60,
              90,
              180
            ]
          },
          {
            "id": 32,
            "name": "小西研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              620,
              60,
              90,
              180
            ]
          },
          {
            "id": 33,
            "name": "構造生物学実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              710,
              60,
              90,
              180
            ]
          },
          {
            "id": 34,
            "name": "柴田研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              800,
              60,
              90,
              180
            ]
          },
          {
            "id": 35,
            "name": "西川研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              890,
              60,
              90,
              180
            ]
          },
          {
            "id": 36,
            "name": "教室4ーS",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1140,
              60,
              260,
              180
            ]
          },
          {
            "id": 37,
            "name": "分子分光学実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1400,
              60,
              90,
              180
            ]
          },
          {
            "id": 38,
            "name": "分子生物学実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1480,
              60,
              90,
              180
            ]
          },
          {
            "id": 39,
            "name": "電気機械実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1570,
              0,
              360,
              240
            ]
          },
          {
            "id": 40,
            "name": "廊下",
            "roomClass": "廊下",
            "fill": "#ccc",
            "shapes": "square",
            "parameters": [
              360,
              0,
              1210,
              60
            ]
          },
          {
            "id": 41,
            "name": "廊下",
            "roomClass": "廊下",
            "fill": "#ccc",
            "shapes": "square",
            "parameters": [
              980,
              0,
              150,
              240
            ]
          },
          {
            "id": 42,
            "name": "廊下",
            "roomClass": "廊下",
            "fill": "#ccc",
            "shapes": "square",
            "parameters": [
              450,
              860,
              1030,
              60
            ]
          },
          {
            "id": 43,
            "name": "廊下",
            "roomClass": "廊下",
            "fill": "#ccc",
            "shapes": "square",
            "parameters": [
              980,
              60,
              120,
              90
            ]
          },
          {
            "id": 44,
            "name": "廊下",
            "roomClass": "廊下",
            "fill": "#ccc",
            "shapes": "square",
            "parameters": [
              980,
              1100,
              120,
              90
            ]
          },
          {
            "id": 45,
            "name": "廊下",
            "roomClass": "廊下",
            "fill": "#ccc",
            "shapes": "square",
            "parameters": [
              980,
              1720,
              120,
              240
            ]
          },
          {
            "id": 46,
            "name": "廊下",
            "roomClass": "廊下",
            "fill": "#ccc",
            "shapes": "square",
            "parameters": [
              480,
              1810,
              90,
              120
            ]
          }
        ]
      },
      {
        "id": 2,
        "rooms": [
          {
            "id": 1,
            "name": "リフレッシュ室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              330,
              1870,
              150,
              180
            ]
          },
          {
            "id": 2,
            "name": "堀研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              560,
              1930,
              90,
              120
            ]
          },
          {
            "id": 3,
            "name": "角谷研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              650,
              1930,
              90,
              120
            ]
          },
          {
            "id": 4,
            "name": "パーマー研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              740,
              1930,
              90,
              120
            ]
          },
          {
            "id": 5,
            "name": "事務部長室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              830,
              1870,
              90,
              180
            ]
          },
          {
            "id": 6,
            "name": "応接・会議室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              920,
              1870,
              90,
              180
            ]
          },
          {
            "id": 7,
            "name": "秘書室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              1870,
              90,
              180
            ]
          },
          {
            "id": 8,
            "name": "校長室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1100,
              1870,
              180,
              180
            ]
          },
          {
            "id": 9,
            "name": "会議室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1280,
              1810,
              270,
              240
            ]
          },
          {
            "id": 10,
            "name": "男子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              920,
              120,
              90
            ]
          },
          {
            "id": 11,
            "name": "女子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              1010,
              120,
              30
            ]
          },
          {
            "id": 12,
            "name": "多目的WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              1040,
              60,
              60
            ]
          },
          {
            "id": 13,
            "name": "香取研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              1190,
              180,
              90
            ]
          },
          {
            "id": 14,
            "name": "香取卒研室",
            "roomClass": "卒研室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              1280,
              180,
              90
            ]
          },
          {
            "id": 15,
            "name": "計測実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              1370,
              180,
              270
            ]
          },
          {
            "id": 16,
            "name": "WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              1630,
              180,
              90
            ]
          },
          {
            "id": 17,
            "name": "教室1ー1",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              270,
              920,
              270,
              180
            ]
          },
          {
            "id": 18,
            "name": "守友研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              530,
              920,
              90,
              180
            ]
          },
          {
            "id": 19,
            "name": "神谷研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              620,
              920,
              90,
              180
            ]
          },
          {
            "id": 20,
            "name": "教室1ー2",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              710,
              920,
              270,
              180
            ]
          },
          {
            "id": 21,
            "name": "SE系ほっとルーム",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1130,
              920,
              180,
              180
            ]
          },
          {
            "id": 22,
            "name": "先進科学系卒研室1",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1310,
              920,
              180,
              180
            ]
          },
          {
            "id": 23,
            "name": "中村（重）研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1480,
              920,
              150,
              180
            ]
          },
          {
            "id": 24,
            "name": "電気工作機械室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1630,
              920,
              90,
              180
            ]
          },
          {
            "id": 25,
            "name": "電気工作実習室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1630,
              860,
              300,
              60
            ]
          },
          {
            "id": 26,
            "name": "男子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              150,
              120,
              90
            ]
          },
          {
            "id": 27,
            "name": "女子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              240,
              120,
              90
            ]
          },
          {
            "id": 28,
            "name": "女子更衣室",
            "roomClass": "",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              330,
              180,
              90
            ]
          },
          {
            "id": 29,
            "name": "西尾研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              420,
              180,
              90
            ]
          },
          {
            "id": 30,
            "name": "西尾卒研室",
            "roomClass": "卒研室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              500,
              180,
              90
            ]
          },
          {
            "id": 31,
            "name": "電子物性実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              590,
              180,
              180
            ]
          },
          {
            "id": 32,
            "name": "暗室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              770,
              180,
              90
            ]
          },
          {
            "id": 33,
            "name": "第1共通実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              0,
              0,
              360,
              240
            ]
          },
          {
            "id": 34,
            "name": "A講義室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              360,
              60,
              180,
              180
            ]
          },
          {
            "id": 35,
            "name": "B講義室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              530,
              60,
              180,
              180
            ]
          },
          {
            "id": 36,
            "name": "教室1ー3",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              710,
              60,
              270,
              180
            ]
          },
          {
            "id": 37,
            "name": "教室1ー4",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1130,
              60,
              270,
              180
            ]
          },
          {
            "id": 38,
            "name": "中村（直）卒研室",
            "roomClass": "卒研室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1400,
              60,
              90,
              180
            ]
          },
          {
            "id": 39,
            "name": "中村（直）研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1480,
              60,
              90,
              180
            ]
          },
          {
            "id": 40,
            "name": "前原研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1570,
              60,
              90,
              180
            ]
          },
          {
            "id": 41,
            "name": "前原卒研室",
            "roomClass": "卒研室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1660,
              60,
              90,
              180
            ]
          },
          {
            "id": 42,
            "name": "嶋田卒研室",
            "roomClass": "卒研室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1750,
              0,
              180,
              120
            ]
          },
          {
            "id": 43,
            "name": "マイクロ波実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1750,
              120,
              90,
              120
            ]
          },
          {
            "id": 44,
            "name": "嶋田研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1840,
              120,
              90,
              120
            ]
          }
        ]
      },
      {
        "id": 3,
        "rooms": [
          {
            "id": 1,
            "name": "横谷研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              330,
              1870,
              90,
              180
            ]
          },
          {
            "id": 2,
            "name": "山中研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              420,
              1930,
              90,
              120
            ]
          },
          {
            "id": 3,
            "name": "山口（裕）研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              560,
              1930,
              90,
              120
            ]
          },
          {
            "id": 4,
            "name": "内倉研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              650,
              1930,
              90,
              120
            ]
          },
          {
            "id": 5,
            "name": "江原研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              740,
              1930,
              90,
              120
            ]
          },
          {
            "id": 6,
            "name": "島田研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              830,
              1870,
              90,
              180
            ]
          },
          {
            "id": 7,
            "name": "松田研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              920,
              1870,
              90,
              180
            ]
          },
          {
            "id": 8,
            "name": "ランボー研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              1870,
              90,
              180
            ]
          },
          {
            "id": 9,
            "name": "荒木研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1100,
              1870,
              90,
              180
            ]
          },
          {
            "id": 10,
            "name": "合併教室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1190,
              1810,
              360,
              240
            ]
          },
          {
            "id": 11,
            "name": "男子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              920,
              120,
              90
            ]
          },
          {
            "id": 12,
            "name": "女子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              1010,
              120,
              30
            ]
          },
          {
            "id": 13,
            "name": "多目的WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              1040,
              60,
              60
            ]
          },
          {
            "id": 14,
            "name": "準備室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              1190,
              180,
              90
            ]
          },
          {
            "id": 15,
            "name": "化学実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1010,
              1280,
              180,
              360
            ]
          },
          {
            "id": 16,
            "name": "WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              1630,
              180,
              90
            ]
          },
          {
            "id": 17,
            "name": "教室2ーE",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              270,
              920,
              270,
              180
            ]
          },
          {
            "id": 18,
            "name": "浅野研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              530,
              920,
              90,
              180
            ]
          },
          {
            "id": 19,
            "name": "田村研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              620,
              920,
              90,
              180
            ]
          },
          {
            "id": 20,
            "name": "教室2ーM",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              710,
              920,
              270,
              180
            ]
          },
          {
            "id": 21,
            "name": "教室2ーS",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1130,
              920,
              270,
              180
            ]
          },
          {
            "id": 22,
            "name": "谷口（圭）研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1400,
              920,
              90,
              180
            ]
          },
          {
            "id": 23,
            "name": "佐々井研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1480,
              920,
              90,
              180
            ]
          },
          {
            "id": 24,
            "name": "準備室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1570,
              920,
              90,
              180
            ]
          },
          {
            "id": 25,
            "name": "応用物理実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1660,
              860,
              270,
              240
            ]
          },
          {
            "id": 26,
            "name": "男子WC",
            "roomClass": "WC",
            "fill": "pink",
            "shapes": "square",
            "parameters": [
              1010,
              150,
              120,
              90
            ]
          },
          {
            "id": 27,
            "name": "C講義室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              0,
              60,
              180,
              180
            ]
          },
          {
            "id": 28,
            "name": "D講義室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              180,
              60,
              180,
              180
            ]
          },
          {
            "id": 29,
            "name": "八木卒研室",
            "roomClass": "卒研室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              360,
              60,
              90,
              180
            ]
          },
          {
            "id": 30,
            "name": "八木研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              450,
              60,
              90,
              180
            ]
          },
          {
            "id": 31,
            "name": "先進科学系卒研室２",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              530,
              60,
              90,
              180
            ]
          },
          {
            "id": 32,
            "name": "先進科学系卒研室３",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              620,
              60,
              90,
              180
            ]
          },
          {
            "id": 33,
            "name": "教室4ーE",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              710,
              60,
              270,
              180
            ]
          },
          {
            "id": 34,
            "name": "教室3ーE",
            "roomClass": "ホームルーム",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1130,
              60,
              270,
              180
            ]
          },
          {
            "id": 35,
            "name": "リフレッシュ室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1400,
              60,
              90,
              180
            ]
          },
          {
            "id": 36,
            "name": "原田研究室",
            "roomClass": "研究室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1480,
              60,
              90,
              180
            ]
          },
          {
            "id": 37,
            "name": "原田卒研室",
            "roomClass": "卒研室",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1570,
              60,
              90,
              180
            ]
          },
          {
            "id": 38,
            "name": "電磁気学応用実験室",
            "roomClass": "",
            "fill": "lightblue",
            "shapes": "square",
            "parameters": [
              1660,
              0,
              270,
              240
            ]
          }
        ]
      }
    ]
  }
];
