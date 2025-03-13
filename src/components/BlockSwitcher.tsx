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
            {blocks.map((block) => {
                console.log("currentBlockId: " + currentBlockId);
                console.log("block.id: " + block.id);
                console.log("currentBlockId === block.id: " + (currentBlockId === block.id));
                return(
                <button
                    key={block.id}
                    style={{
                        border: "2px solid",
                        borderColor: currentBlockId === block.id ? "white" : "transparent",
                    }}
                    onClick={() => setBlockId(block.id)}
                >
                    {block.name}
                </button>
            )})}
        </div>
    );
};

export default BlockSwitcher;