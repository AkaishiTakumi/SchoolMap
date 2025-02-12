import React, { useState } from "react";
import FloorSelector from "./FloorSelector.tsx";
import FloorMap from "./FloorMap.tsx";
import RoomList from "./RoomList.tsx";
import RoomDetails from "./RoomDetails.tsx";
import { floors, Room } from "../data/floors";

const CampusMap: React.FC = () => {
    const [selectedFloor, setSelectedFloor] = useState<number>(1);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

    const currentFloor = floors.find((floor) => floor.id === selectedFloor);

    if (!currentFloor) return <p>エラー: 階が見つかりません</p>;

    return (
        <div className="flex flex-col items-center p-4">
            {/* 階の切り替え */}
            <FloorSelector 
                floors={floors} 
                selectedFloor={selectedFloor} 
                onSelectFloor={setSelectedFloor} 
            />

            <div className="flex gap-8">
                {/* 校内マップ */}
                <FloorMap 
                    floor={currentFloor} 
                    selectedRoom={selectedRoom} 
                    onSelectRoom={setSelectedRoom} 
                />

                <div className="flex flex-col gap-4">
                    {/* 部屋一覧 */}
                    <RoomList 
                        rooms={currentFloor.rooms} 
                        selectedRoom={selectedRoom} 
                        onSelectRoom={setSelectedRoom} 
                    />

                    {/* 部屋の詳細 */}
                    <RoomDetails selectedRoom={selectedRoom} />
                </div>
            </div>
        </div>
    );
};

export default CampusMap;
