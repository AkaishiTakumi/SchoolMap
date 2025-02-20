import { useState, useCallback } from "react";
import { floors, Floor, Room } from "../data/floors";
import moji from "moji";
import Fuse from "fuse.js";

const useSearch = (
    setFloorId: (id: number) => void,
    setRoom: (room: Room | null) => void,
    setHighlighted: (ids: string[]) => void
) => {
    const [search, setSearch] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // テキストを正規化する関数
    const normalizeText = (text: string) => {
        // カタカナをひらがなに変換して、スペースを削除
        return moji(text).convert("KK", "HG").toString().toLowerCase().replace(/\s+/g, "");
    };

    // 検索ボタンを押したときの処理
    const handleSearch = useCallback(() => {
        if (!search) {
            setErrorMessage(""); // 空白の検索でエラーメッセージを消す
            return;
        }

        // 検索ワードの前後のスペースを削除して、小文字に変換
        const query = search.replace(/\s+/g, "").toLowerCase();

        // searchと一致する../data/floors.tsのfloor.nameがあるかどうか
        // あればそのfloor.idをsetFloorIdにセット
        const floorMatch = floors.find((floor) =>
            normalizeText(floor.name).includes(search)
        );

        // 部屋名で検索
        if (floorMatch) {
            setFloorId(floorMatch.id);
            setRoom(null);
            setHighlighted([]);
            return;
        }

        // 部屋名で検索
        const fuse = new Fuse(floors, {
            keys: ["name", "rooms.name"],
            threshold: 0.3, // あいまい度を設定
            distance: 100, // スペルミスをカバーするための距離設定
            includeScore: true,
            useExtendedSearch: true
        });


        // 検索結果を取得
        const result = fuse.search(query);

        if (result.length > 0) {// 検索結果があったら
            const matchedFloor = result[0].item as Floor;
            setFloorId(matchedFloor.id);

            // もし部屋が一致していたら
            const matchedRooms = result.flatMap((res) =>
                res.item.rooms.filter((room) =>
                    normalizeText(room.name).includes(query)
                )
            );

            if (matchedRooms.length === 1) {// 部屋が一致していたら
                setRoom(matchedRooms[0]); // 部屋をセット
                setHighlighted([]); // ハイライトをクリア
            } else {// 部屋が一致していなかったら
                setRoom(null); // 部屋をクリア
                setHighlighted(matchedRooms.map((room) => room.id)); // 部屋をハイライト
            }
            setErrorMessage("");  // エラーメッセージを消す
        } else {// 検索結果がなかったら
            setErrorMessage("検索結果が見つかりませんでした。");
        }
    }, [search, setFloorId, setRoom, setHighlighted]);

    const clearSearch = () => {
        setSearch("");
        setHighlighted([]);
        setErrorMessage("");  // 検索をクリアした時にエラーメッセージもクリア
    };

    return { search, setSearch, handleSearch, clearSearch, errorMessage };
};

export default useSearch;