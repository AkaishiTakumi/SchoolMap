import React from "react";
import { Room } from "../data/rooms";
import "./CSSclass/RoomList.css"

interface RoomListProps {
    rooms: Room[];
    selectedRoom: Room | null;
    setRoom: (room: Room) => void;
}

const RoomList: React.FC<RoomListProps> = ({ rooms, selectedRoom, setRoom }) => {
    return (
        <div>
            <h2>部屋一覧</h2>
            <table>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.id}>
                            <td
                                className={`
                                    room-row
                                    ${selectedRoom?.id === room.id ? 'selected' : ''}
                                `}
                                onClick={() => setRoom(room)}
                            >
                                {room.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoomList;
