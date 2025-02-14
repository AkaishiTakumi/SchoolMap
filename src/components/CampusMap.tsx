import React, { useState } from "react";
import FloorSelector from "./FloorSelector.tsx";
import FloorMap from "./FloorMap.tsx";
import RoomList from "./RoomList.tsx";
import RoomDetails from "./RoomDetails.tsx";
import SearchBar from "./SearchBar.tsx";
import { floors, Floor, Room } from "../data/floors";

const CampusMap: React.FC = () => {
    const [selectedFloor, setSelectedFloor] = useState<number>(1);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [highlightedRooms, setHighlightedRooms] = useState<string[]>([]);

    const currentFloor = floors.find((floor) => floor.id === selectedFloor);

    if (!currentFloor) return <p>エラー: 階が見つかりません</p>;

    const handleSearch = (query: string) => {
        if (!query) return;

        const normalizedQuery = query.replace(/\s+/g, "").toLowerCase();

        // フロア名検索
        const floorMatch = floors.find((floor) => 
            floor.name.replace(/\s+/g, "").toLowerCase().includes(normalizedQuery)
        );

        if (floorMatch) {
            setSelectedFloor(floorMatch.id);
            setSelectedRoom(null);
            setHighlightedRooms([]);
            return;
        }

        // 部屋名検索
        let matchedRooms: Room[] = [];
        let matchedFloor: Floor | null = null;

        for (const floor of floors) {
            const roomMatches = floor.rooms.filter((room) =>
                room.name.replace(/\s+/g, "").toLowerCase().includes(normalizedQuery)
            );

            if (roomMatches.length > 0) {
                matchedRooms.push(...roomMatches);
                if (!matchedFloor) {
                    matchedFloor = floor; // 最初に見つかったフロアを保存
                }
            }
        }

        if (matchedFloor !== null) {
            setSelectedFloor(matchedFloor.id);
            if (matchedRooms.length === 1) {
                setSelectedRoom(matchedRooms[0]);
                setHighlightedRooms([]);
            } else {
                setSelectedRoom(null);
                setHighlightedRooms(matchedRooms.map((room) => room.id));
            }
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            {/* 検索バー */}
            <SearchBar onSearch={handleSearch} />

            {/* フロアの切り替え */}
            <FloorSelector 
                floors={floors} 
                selectedFloor={selectedFloor} 
                onSelectFloor={setSelectedFloor} 
            />

            <div className="flex flex-col md:flex-row gap-8 w-full">
                {/* 校内マップ */}
                <FloorMap 
                    floor={currentFloor} 
                    selectedRoom={selectedRoom} 
                    onSelectRoom={setSelectedRoom} 
                    highlightedRooms={highlightedRooms}
                />

                <div className="flex flex-col gap-4 w-full max-w-md">
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
