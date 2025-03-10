import React from "react";
import { Floor } from "../data/rooms";

interface FloorSwitcherProps {
    currentFloorId: string;
    floors: Floor[];
    setFloorId: (id: string) => void;
}

const FloorSwitcher: React.FC<FloorSwitcherProps> = ({ currentFloorId, floors, setFloorId }) => {
    return (
        <div>
            {floors.map((floor) => (
                <button
                    className={`
                        px-6
                        py-3
                        border
                        rounded
                        text-lg
                        md:text-base
                        ${currentFloorId === floor.id ? "bg-blue-500 text-white" : "bg-gray-200"}
                    `}
                    key={floor.id}
                    onClick={() => setFloorId(floor.id)}
                >
                    {floor.name}
                </button>
            ))}
        </div>
    );
};

export default FloorSwitcher;