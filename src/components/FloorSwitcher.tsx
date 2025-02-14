import React from "react";
import { Floor } from "../data/floors";

interface FloorSwitcherProps {
    currentFloorId: number;
    floors: Floor[];
    setFloorId: (id: number) => void;
}

const FloorSwitcher: React.FC<FloorSwitcherProps> = ({ currentFloorId, floors, setFloorId }) => {
    return (
        <div className="flex gap-4 mb-4">
            {floors.map((floor) => (
                <button
                    key={floor.id}
                    className={`px-6 py-3 border rounded text-lg md:text-base ${currentFloorId === floor.id ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    onClick={() => setFloorId(floor.id)}
                >
                    {floor.name}
                </button>
            ))}
        </div>
    );
};

export default FloorSwitcher;