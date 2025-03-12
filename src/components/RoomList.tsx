import React from "react";
import { Room } from "../data/structures";
import "./CSSclass/RoomList.css"

interface RoomListProps {
    rooms: Room[];
    selectedRoom: Room | null;
    showSubName: boolean;
    setRoom: (room: Room) => void;
}

const RoomList: React.FC<RoomListProps> = ({ rooms, selectedRoom, showSubName, setRoom }) => {
    return (
        <div>
            <h2>部屋一覧</h2>
            <table>
                <tbody>
                    {rooms.map((room) => {
                        if (!showSubName || room.sub_name != "")
                            return (
                                <tr key={room.id}>
                                    <td
                                        className={`
                                        room-row
                                        ${selectedRoom?.id === room.id ? 'selected' : ''}
                                    `}
                                        onClick={() => setRoom(room)}
                                    >
                                        {showSubName ? room.sub_name : room.name}
                                    </td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default RoomList;
