import React from "react";
import { Room } from "../data/floors";

type RoomListProps = {
    rooms: Room[];
    selectedRoom: Room | null;
    onSelectRoom: (room: Room) => void;
};

const RoomList: React.FC<RoomListProps> = ({ rooms, selectedRoom, onSelectRoom }) => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-2">部屋一覧</h2>
            <table className="border-collapse border border-gray-400">
                <tbody>
                    {rooms.map((room) => (
                        <tr
                            key={room.id}
                            className={`cursor-pointer ${selectedRoom?.id === room.id ? "bg-yellow-300" : ""}`}
                            onClick={() => onSelectRoom(room)}
                        >
                            <td className="border border-gray-400 p-2">{room.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoomList;
