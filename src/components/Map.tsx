import React from "react";
import { Floor, Room } from "../data/rooms";

interface MapProps {
    currentFloor: Floor;
    selectedRoom: Room | null;
    highlighted: string[];
    setRoom: (room: Room) => void;
}

const Map: React.FC<MapProps> = ({ currentFloor, selectedRoom, highlighted, setRoom }) => {
    // 部屋名の大きさを調整する
    const roomNameFontSize = (room: Room) => {
        const roomNameMinSize = 7
        const baseFontSize = room.width > room.height ? room.width / room.name.length : room.height / room.name.length;
        if (baseFontSize < roomNameMinSize) {
            return roomNameMinSize;
        }
        return baseFontSize;
    }

    // 廊下を描く
    const drowCorridor=(currentFloorId:string)=>{
        if(currentFloorId==="S1")
        {
            return (
                <>
                    <rect x="230" y="60" width="410" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="60" width="10" height="690" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="260" y="350" width="350" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="80" width="50" height="30" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="430" width="50" height="30" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="640" width="50" height="110" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="270" y="670" width="30" height="50" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />

                    <rect x="695" y="330" width="25" height="5" fill="blue" />
                    <rect x="695" y="330" width="5" height="25" fill="blue" />
                    <rect x="740" y="330" width="25" height="5" fill="blue" />
                    <rect x="760" y="330" width="5" height="25" fill="blue" />
                </>
            )
        }
        else if(currentFloorId==="S2")
        {
            return (
                <>
                    <rect x="230" y="60" width="470" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="60" width="10" height="630" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="200" y="350" width="460" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="80" width="50" height="30" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="430" width="50" height="30" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="360" y="670" width="180" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="640" width="50" height="30" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="270" y="690" width="120" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="280" y="690" width="20" height="60" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                </>
            )
        }
        else if(currentFloorId==="S3")
        {
            return (
                <>
                    <rect x="110" y="60" width="560" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="60" width="10" height="630" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="200" y="350" width="470" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="80" width="50" height="30" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="430" width="50" height="30" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="360" y="670" width="150" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="440" y="640" width="50" height="30" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="250" y="690" width="140" height="20" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="280" y="690" width="20" height="60" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="450" y="140" width="40" height="210" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                    <rect x="450" y="170" width="60" height="180" fill="#ccc" stroke="#0f0" strokeWidth="3" opacity="0.5" />
                </>
            )
        }
    }

    return (
        <div
            style={{
                width: "320px",
            }}
        >
            <svg viewBox="0 0 960 960">
                {/* 背景 */}
                <rect width="4096" height="4096" fill="#f4f4f4" />

                {/* 廊下 */}
                <rect x="100" y="50" width="30" height="10" fill="#f00" />
                <rect x="100" y="50" width="10" height="30" fill="#f00" />
                <rect x="100" y="140" width="30" height="10" fill="#f44" />
                <rect x="100" y="120" width="10" height="30" fill="#f44" />

                <rect x="740" y="50" width="30" height="10" fill="#f88" />
                <rect x="760" y="50" width="10" height="30" fill="#f88" />
                <rect x="740" y="140" width="30" height="10" fill="#b00" />
                <rect x="760" y="120" width="10" height="30" fill="#b00" />


                <rect x="190" y="340" width="30" height="10" fill="#b44" />
                <rect x="190" y="340" width="10" height="30" fill="#b44" />
                <rect x="190" y="430" width="30" height="10" fill="#b88" />
                <rect x="190" y="410" width="10" height="30" fill="#b88" />

                <rect x="740" y="340" width="30" height="10" fill="red" />
                <rect x="760" y="340" width="10" height="30" fill="red" />
                <rect x="740" y="430" width="30" height="10" fill="red" />
                <rect x="760" y="410" width="10" height="30" fill="red" />


                <rect x="210" y="680" width="30" height="10" fill="red" />
                <rect x="210" y="680" width="10" height="30" fill="red" />
                <rect x="210" y="750" width="30" height="10" fill="red" />
                <rect x="210" y="730" width="10" height="30" fill="red" />

                <rect x="610" y="660" width="30" height="10" fill="red" />
                <rect x="630" y="660" width="10" height="30" fill="red" />
                <rect x="610" y="750" width="30" height="10" fill="red" />
                <rect x="630" y="730" width="10" height="30" fill="red" />
                {drowCorridor(currentFloor.id)}

                {/* 部屋と部屋名 */}
                {currentFloor.groups.flatMap(group => group.rooms).map((room) => {
                    const isHighlighted = highlighted.includes(room.id);
                    const isSelected = selectedRoom?.id === room.id;
                    return (
                        <g
                            key={room.id}
                            onClick={() => setRoom(room)}
                        >
                            <rect
                                x={room.x}
                                y={room.y}
                                width={room.width - 0.5}
                                height={room.height - 0.5}
                                fill={room.fill}
                                stroke={isSelected ? "yellow" : "black"}
                                strokeWidth={1}
                                opacity={highlighted.length > 0 && !isHighlighted ? 0.3 : 1}
                            />
                            <text
                                x={room.x + room.width / 2}
                                y={room.y + room.height / 2}
                                fontSize={roomNameFontSize(room)}
                                fill="black"
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                style={{
                                    writingMode: room.height > room.width ? 'vertical-rl' : 'horizontal-tb'
                                }}
                            >
                                {room.name}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default Map;