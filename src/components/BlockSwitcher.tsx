import React from "react";
import { Block } from "../data/structures";

interface BlockSwitcherProps {
    currentBlockId: string;
    blocks: Block[];
    setBlockId: (id: string) => void;
}

const BlockSwitcher: React.FC<BlockSwitcherProps> = ({ currentBlockId, blocks, setBlockId }) => {
    return (
        <div>
            {blocks.map((block) => (
                <button
                    className={`
                        px-6
                        py-3
                        border
                        rounded
                        text-lg
                        md:text-base
                        ${currentBlockId === block.id ? "bg-blue-500 text-white" : "bg-gray-200"}
                    `}
                    key={block.id}
                    onClick={() => setBlockId(block.id)}
                >
                    {block.name}
                </button>
            ))}
        </div>
    );
};

export default BlockSwitcher;