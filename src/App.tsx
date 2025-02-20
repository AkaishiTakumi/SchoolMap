import React, { useState, useEffect } from "react";
import { floors, Room } from "./data/floors";
import FloorSwitcher from "./components/FloorSwitcher.tsx";
import Map from "./components/Map.tsx";
import RoomDetails from "./components/RoomDetails.tsx";
import RoomList from "./components/RoomList.tsx";
import useSearch from "./hooks/useSearch.ts";
import SearchBar from "./components/SearchBar.tsx";

const App: React.FC = () => {
    const [floorId, setFloorId] = useState<number>(1);
    const [selectedRoom, setRoom] = useState<Room | null>(null);
    const [highlighted, setHighlighted] = useState<string[]>([]);
    const { search, setSearch, handleSearch, clearSearch, errorMessage } = useSearch(setFloorId, setRoom, setHighlighted);

    const currentFloor = floors.find((floor) => floor.id === floorId);

    const handleRoomSelect = (room: Room) => {
        setRoom(room);
        clearSearch();
    };

    useEffect(() => {
        const input = document.querySelector("input[type='text']");
        if (input) {
            input.addEventListener("focus", () => {
                if (window.innerWidth <= 768) {
                    input.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    }, []);

    if (!currentFloor) return <p>エラー: 階が見つかりません</p>;

    return (
        <div className="flex flex-col items-center p-4">
            {/* タイトル */}
            <h1 className="text-2xl font-bold mb-4">校内マップ</h1>

            {/* 検索バー */}
            <SearchBar
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />

            {/* エラーメッセージを表示 */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            {/* 階の切り替えボタン */}
            <FloorSwitcher
                floors={floors}
                currentFloorId={floorId}
                setFloorId={setFloorId}
            />

            <div className="flex flex-col md:flex-row gap-8 w-full">
                {/* マップ */}
                <Map
                    currentFloor={currentFloor}
                    selectedRoom={selectedRoom}
                    highlighted={highlighted}
                    setRoom={handleRoomSelect}
                />

                <div className="flex flex-col gap-4 w-full max-w-md">
                    {/* 部屋リスト */}
                    <RoomList
                        rooms={currentFloor.rooms}
                        setRoom={handleRoomSelect}
                        selectedRoom={selectedRoom}
                    />
                    
                    {/* 部屋詳細 */}
                    <RoomDetails
                        selectedRoom={selectedRoom}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
