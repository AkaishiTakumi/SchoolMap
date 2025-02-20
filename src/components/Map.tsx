import React from "react";
import { Floor, Room } from "../data/floors";

interface MapProps {
    currentFloor: Floor;
    selectedRoom: Room | null;
    highlighted: string[];
    setRoom: (room: Room) => void;
}

const Map: React.FC<MapProps> = ({ currentFloor, selectedRoom, highlighted, setRoom }) => {
    return (
        <div className="relative border p-2 w-full max-w-md">
            <svg viewBox="0 0 300 300" className="w-full h-auto">
                <rect width="300" height="300" fill="#f4f4f4" />

                {currentFloor.corridorType === "H" ? (
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

                {currentFloor.rooms.map((room) => {
                    const isHighlighted = highlighted.includes(room.id);
                    const isSelected = selectedRoom?.id === room.id;
                    return (
                        <rect
                            key={room.id}
                            x={room.x}
                            y={room.y}
                            width={room.width}
                            height={room.height}
                            fill={room.fill}
                            stroke={isSelected ? "yellow" : "black"}
                            strokeWidth={isSelected ? 3 : 1}
                            opacity={highlighted.length > 0 && !isHighlighted ? 0.3 : 1}
                            onClick={() => setRoom(room)}
                            className="cursor-pointer hover:fill-blue-500"
                        />
                    );
                })}

                {currentFloor.rooms.map((room) => (
                    <text key={room.id} x={room.x} y={room.y - 5} fontSize="10" fill="black">
                        {room.name}
                    </text>
                ))}
            </svg>
        </div>
    );
};

export default Map;