import React from "react";

type Floor = {
    id: number;
    name: string;
};

type FloorSelectorProps = {
    floors: Floor[];
    selectedFloor: number;
    onSelectFloor: (floorId: number) => void;
};

const FloorSelector: React.FC<FloorSelectorProps> = ({ floors, selectedFloor, onSelectFloor }) => {
    return (
        <div className="flex gap-4 mb-4">
            {floors.map((floor) => (
                <button
                    key={floor.id}
                    className={`px-4 py-2 border rounded ${selectedFloor === floor.id ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    onClick={() => onSelectFloor(floor.id)}
                >
                    {floor.name}
                </button>
            ))}
        </div>
    );
};

export default FloorSelector;
