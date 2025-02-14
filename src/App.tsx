import React, { useState } from "react";
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
    const { search, setSearch, handleSearch } = useSearch(setFloorId, setRoom, setHighlighted);

    const currentFloor = floors.find((floor) => floor.id === floorId);

    if (!currentFloor) return <p>エラー: 階が見つかりません</p>;

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">校内マップ</h1>

            <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />

            <FloorSwitcher floors={floors} currentFloorId={floorId} setFloorId={setFloorId} />
            <div className="flex flex-col md:flex-row gap-8 w-full">
                <Map currentFloor={currentFloor} highlighted={highlighted} setRoom={setRoom} />

                <div className="flex flex-col gap-4 w-full max-w-md">
                    <RoomList rooms={currentFloor.rooms} setRoom={setRoom} selectedRoom={selectedRoom} />
                    
                    <RoomDetails selectedRoom={selectedRoom} />
                </div>
            </div>
        </div>
    );
};

export default App;