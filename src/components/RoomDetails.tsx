import React from "react";
import { Room } from "../data/floors";

type RoomDetailsProps = {
    selectedRoom: Room | null;
};

const RoomDetails: React.FC<RoomDetailsProps> = ({ selectedRoom }) => {
    if (!selectedRoom) {
        return <p className="text-gray-500">部屋を選択してください</p>;
    }

    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">{selectedRoom.name}</h2>
            <p><strong>ID:</strong> {selectedRoom.id}</p>
            <p><strong>座標:</strong> ({selectedRoom.x}, {selectedRoom.y})</p>
            <p><strong>サイズ:</strong> {selectedRoom.width} x {selectedRoom.height}</p>
            <p><strong>色:</strong> <span className="inline-block w-6 h-6" style={{ backgroundColor: selectedRoom.fill }}></span></p>
        </div>
    );
};

export default RoomDetails;
