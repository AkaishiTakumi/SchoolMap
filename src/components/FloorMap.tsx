import React from "react";
import { Floor, Room } from "../data/floors";

type FloorMapProps = {
    floor: Floor;
    selectedRoom: Room | null;
    onSelectRoom: (room: Room) => void;
};

const FloorMap: React.FC<FloorMapProps> = ({ floor, selectedRoom, onSelectRoom }) => {
    return (
        <div className="relative border p-2">
            <svg width="300" height="300" className="border">
                {/* 背景 */}
                <rect width="300" height="300" fill="#f4f4f4" />

                {/* 廊下の描画 */}
                {floor.corridorType === "H" ? (
                    <>
                        <rect x="90" y="0" width="40" height="130" fill="#ccc" />
                        <rect x="90" y="170" width="40" height="130" fill="#ccc" />
                        <rect x="0" y="130" width="300" height="40" fill="#ccc" />
                    </>
                ) : (
                    <>
                        <rect x="90" y="0" width="40" height="200" fill="#ccc" />
                        <rect x="0" y="200" width="220" height="40" fill="#ccc" />
                    </>
                )}

                {/* 階段 */}
                <polygon points="140,100 160,100 150,120" fill="gray" />
                <text x="145" y="115" fontSize="10" fill="black">階段</text>

                {/* 部屋の描画 */}
                {floor.rooms.map((room) => (
                    <rect
                        key={room.id}
                        x={room.x}
                        y={room.y}
                        width={room.width}
                        height={room.height}
                        fill={room.fill}
                        stroke={selectedRoom?.id === room.id ? "yellow" : "black"}
                        strokeWidth={selectedRoom?.id === room.id ? 3 : 1}
                        onClick={() => onSelectRoom(room)}
                        className="cursor-pointer hover:fill-blue-500"
                    />
                ))}

                {/* 部屋の名前表示 */}
                {floor.rooms.map((room) => (
                    <text key={room.id} x={room.x} y={room.y - 5} fontSize="10" fill="black">
                        {room.name}
                    </text>
                ))}
            </svg>
        </div>
    );
};

export default FloorMap;
