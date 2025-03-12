import { useState, useCallback } from "react";
import { blocks, Room } from "../data/structures";
import moji from "moji";
import Fuse from "fuse.js";

/**
 * 検索機能を提供するカスタムフック
 * @param setBlockId 階をセットする関数
 * @param setRoom 部屋をセットする関数
 * @param setHighlighted ハイライトする部屋のidをセットする関数
 * @returns \{search, setSearch, handleSearch, clearSearch, errorMessage}
 */
const useSearch = (
    setBlockId: (id: string) => void,
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

        // searchと一致する../data/blocks.tsのblock.nameがあるかどうか
        // あればそのblock.idをsetBlockIdにセット
        const blockMatch = blocks.find((block) =>
            normalizeText(block.name).includes(search)
        );

        // 部屋名で検索
        if (blockMatch) {
            setBlockId(blockMatch.id);
            setRoom(null);
            setHighlighted([]);
            return;
        }

        // 部屋名で検索
        const fuse = new Fuse(blocks.flatMap(block => block.groups.flatMap(group => group.rooms)), {
            keys: ["name"],
            threshold: 0.3, // あいまい度を設定
            distance: 100, // スペルミスをカバーするための距離設定
            includeScore: true,
            useExtendedSearch: true
        });

        // 検索結果を取得
        const result = fuse.search(query);

        if (result.length > 0) { // 検索結果があったら
            const matchedRooms = result.map(res => res.item as Room);
            const matchedBlock = blocks.find(block => 
                block.groups.some(group => 
                    group.rooms.some(room => matchedRooms.some(matchedRoom => room.id === matchedRoom.id))
                )
            );
        
            if (matchedBlock) {
                setBlockId(matchedBlock.id);
            
                if (matchedRooms.length === 1) { // 部屋が一致していたら
                    setRoom(matchedRooms[0]); // 部屋をセット
                    setHighlighted([]); // ハイライトをクリア
                } else { // 部屋が一致していなかったら
                    setRoom(null); // 部屋をクリア
                    setHighlighted(matchedRooms.map(room => room.id)); // 部屋をハイライト
                }
                setErrorMessage("");  // エラーメッセージを消す
            }
        } else { // 検索結果がなかったら
            setErrorMessage("検索結果が見つかりませんでした。");
        }
    }, [search, setBlockId, setRoom, setHighlighted]);

    const clearSearch = () => {
        setSearch("");
        setHighlighted([]);
        setErrorMessage("");  // 検索をクリアした時にエラーメッセージもクリア
    };

    return { search, setSearch, handleSearch, clearSearch, errorMessage };
};

export default useSearch;