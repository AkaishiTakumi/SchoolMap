import { useState } from "react";
import { floors, Floor, Room } from "../data/floors";

const useSearch = (setFloorId: (id: number) => void, setRoom: (room: Room | null) => void, setHighlighted: (ids: string[]) => void) => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        if (!search) return;

        const query = search.replace(/\s+/g, "").toLowerCase();

        const floorMatch = floors.find((floor) =>
            floor.name.replace(/\s+/g, "").toLowerCase().includes(query)
        );

        if (floorMatch) {
            setFloorId(floorMatch.id);
            setRoom(null);
            setHighlighted([]);
            return;
        }

        let matchedRooms: Room[] = [];
        let matchedFloor: Floor | null = null;

        for (const floor of floors) {
            const roomMatches = floor.rooms.filter((room) =>
                room.name.replace(/\s+/g, "").toLowerCase().includes(query)
            );

            if (roomMatches.length > 0) {
                matchedRooms.push(...roomMatches);
                if (!matchedFloor) {
                    matchedFloor = floor;
                }
            }
        }

        if (matchedFloor !== null) {
            setFloorId(matchedFloor.id);
            if (matchedRooms.length === 1) {
                setRoom(matchedRooms[0]);
                setHighlighted([]);
            } else {
                setRoom(null);
                setHighlighted(matchedRooms.map((room) => room.id));
            }
        }
    };

    return { search, setSearch, handleSearch };
};

export default useSearch;