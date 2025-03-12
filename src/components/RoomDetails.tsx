import React from "react";
import { Room } from "../data/structures";

interface RoomDetailsProps {
    selectedRoom: Room | null;
}

const RoomDetails: React.FC<RoomDetailsProps> = ({ selectedRoom }) => {
    return (
        <div>
            {selectedRoom ? (
                <>
                    <h2>
                        {selectedRoom.name}
                    </h2>
                    <p><strong>ID:</strong> {selectedRoom.id}</p>
                    <p><strong>座標:</strong> ({selectedRoom.x}, {selectedRoom.y})</p>
                    <p><strong>サイズ:</strong> {selectedRoom.width} x {selectedRoom.height}</p>
                    <p>
                        <strong>色:</strong>
                        <span
                            style={{
                                backgroundColor: selectedRoom.fill
                            }}>
                        </span>
                    </p>
                </>
            ) : (
                <p>部屋を選択してください</p>
            )}
        </div>
    );
};

export default RoomDetails;
