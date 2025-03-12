import React, { useState, useEffect } from "react";
import { blocks, Room } from "./data/structures.ts";
import BlockSwitcher from "./components/BlockSwitcher.tsx";
import Map from "./components/Map.tsx";
import RoomDetails from "./components/RoomDetails.tsx";
import RoomList from "./components/RoomList.tsx";
import useSearch from "./hooks/useSearch.ts";
import SearchBar from "./components/SearchBar.tsx";

const App: React.FC = () => {
    const [blockId, setBlockId] = useState<string>("S1");
    const [selectedRoom, setRoom] = useState<Room | null>(null);
    const [highlighted, setHighlighted] = useState<string[]>([]);
    const { search, setSearch, handleSearch, clearSearch, errorMessage } = useSearch(setBlockId, setRoom, setHighlighted);

    const currentBlock = blocks.find((block) => block.id === blockId);

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
                    window.scrollBy(0, 20); // 20px上にスクロール
                }
            });
        }
    }, []);

    if (!currentBlock) return <p>エラー: 階が見つかりません</p>;

    return (
        <div>
            {/* タイトル */}
            <h1>校内マップ</h1>

            {/* 検索バー */}
            <SearchBar
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />

            {/* エラーメッセージを表示 */}
            {errorMessage && <p>{errorMessage}</p>}

            {/* 階の切り替えボタン */}
            <BlockSwitcher
                blocks={blocks}
                currentBlockId={blockId}
                setBlockId={setBlockId}
            />

            <div>
                {/* マップ */}
                <Map
                    currentBlock={currentBlock}
                    selectedRoom={selectedRoom}
                    highlighted={highlighted}
                    setRoom={handleRoomSelect}
                    setBlockId={setBlockId} // 追加
                />

                <div>
                    {/* 部屋リスト */}
                    <RoomList
                        rooms={currentBlock.groups.flatMap(group => group.rooms)}
                        setRoom={handleRoomSelect}
                        selectedRoom={selectedRoom}
                    />

                    {/* 部屋詳細 */}
                    {/*<RoomDetails
                        selectedRoom={selectedRoom}
                    />*/}
                </div>
            </div>
        </div>
    );
};

export default App;
