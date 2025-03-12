import React, { useState } from "react";
import { Block, Room } from "../data/structures";
import "./CSSclass/Map.css";

interface MapProps {
    currentBlock: Block;
    selectedRoom: Room | null;
    highlighted: string[];
    setRoom: (room: Room) => void;
    setBlockId: (id: string) => void; // 追加
}

const Map: React.FC<MapProps> = ({ currentBlock, selectedRoom, highlighted, setRoom, setBlockId }) => {
    // 部屋名の大きさを調整する
    const roomNameFontSize = (room: Room) => {
        const roomNameMinSize = 7
        const baseFontSize = room.width > room.height ? room.width / room.name.length : room.height / room.name.length;
        if (baseFontSize < roomNameMinSize) {
            return roomNameMinSize;
        }
        return baseFontSize;
    }

    const [highlightStairs, setHighlightStairs] = useState<string>();

    /**
     * 階段の基礎
     * @param stairsId 階段の種類
     * @param x 開始x座標
     * @param y 開始y座標
     * @param width 幅
     * @param height 奥行
     * @param turning 上下反転するかどうか
     * @param rotate 回転させる 0:0deg 1:90deg 2:180deg 3:-90deg 270deg
     * @returns 
     */
    const baseStairs = (stairsId: number, x: number, y: number, width: number, height: number, turning: boolean, rotateId: number, targetBlockId: string, highlightStairsId: string) => {
        const transform = turning ? `translate(0 ${2 * y + height}) scale(1,-1)` : undefined;

        let rotate;
        if (rotateId === 0) {
            rotate = undefined;
        }
        else if (rotateId === 1) {
            rotate = `translate(${y * width / height + width + x},${-x * height / width + y}) rotate(90) scale(${height / width} ${width / height})`
        }
        else if (rotateId === 2) {
            rotate = `translate(${width + x * 2},${height + y * 2}) rotate(180) scale(1 1)`
        }
        else if (rotateId === 3) {
            rotate = `translate(0,${x * height / width + height + y}) rotate(-90) scale(${height / width} ${width / height})`
        }

        const rectColor = highlightStairsId == highlightStairs ? "yellow" : "#ccc";
        if (stairsId === 0) {
            return (
                <g
                    transform={rotate}
                    onClick={() => handleStairsClick(targetBlockId, highlightStairsId)}
                >
                    {turning ? "" :
                        <path
                            d={`
                                m${x + width * 0.4} ${y}
                                l${width * 0.2} 0
                            `}
                            fill="none"
                            stroke="#333"
                            strokeWidth="1"
                            opacity="0.5"
                        />
                    }
                    <g transform={transform}>
                        <rect x={x + width * 0.6} y={y} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.8} y={y} width={width * 0.2} height={height} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x} y={y + height * 0.5} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.2} y={y + height * 0.5} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.4} y={y + height * 0.5} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.6} y={y + height * 0.5} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <path
                            d={`
                                m${x} ${y + height * 0.75}
                                l${width * 0.9} 0
                                l0 ${height * -0.5}
                                l${width * -0.2} 0
                                l0 ${height * 0.1}
                                l${width * -0.1} ${height * -0.1}
                                l${width * 0.1} ${height * -0.1}
                                l0 ${height * 0.1}
                                l${width * 0.2} 0
                                l0 ${height * 0.5}
                                l${width * -0.9} 0
                            `}
                            fill="#333"
                            stroke="#333"
                            strokeWidth="0.75"
                        />
                    </g>
                    <path
                        d={`
                            m${x + width * 0.36} ${y + height * (turning ? 0.4 : -0.1)}
                            l${width * 0.12} ${height * 0.3}
                            l${width * 0.1} 0
                            l${width * -0.15} ${height * 0.1}
                            l${width * 0.1} 0
                            l${width * 0.12} ${height * 0.3}
                        `}
                        fill="none"
                        stroke="#333"
                        strokeWidth="0.5"
                    />
                </g>
            );
        }
        else if (stairsId === 1) {
            return (
                <g
                    transform={rotate}
                    onClick={() => handleStairsClick(targetBlockId, highlightStairsId)}
                >
                    <g transform={transform}>
                        <rect x={x} y={y + height * 0.5} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.2} y={y + height * 0.5} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <path
                            d={`
                                m${x} ${y + height * 0.75}
                                l${width * 0.3} 0
                                l0 ${height * 0.1}
                                l${width * 0.1} ${height * -0.1}
                                l${width * -0.1} ${height * -0.1}
                                l0 ${height * 0.1}
                                l${width * -0.3} 0
                            `}
                            fill="#333"
                            stroke="#333"
                            strokeWidth="0.5"
                        />
                    </g>
                    <path
                        d={`
                            m${x + width * 0.4} ${y + height * (turning ? 0.5 : 1)}
                            l${width * 0.2} 0
                        `}
                        fill="none"
                        stroke="#333"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                    <path
                        d={`
                            m${x + width * 0.36} ${y + height * (turning ? -0.1 : 0.4)}
                            l${width * 0.12} ${height * 0.3}
                            l${width * 0.1} 0
                            l${width * -0.15} ${height * 0.1}
                            l${width * 0.1} 0
                            l${width * 0.12} ${height * 0.3}
                        `}
                        fill="none"
                        stroke="#333"
                        strokeWidth="0.5"
                    />
                </g>
            );
        }
        else if (stairsId === 2) {
            return (
                <g
                    transform={rotate}
                    onClick={() => handleStairsClick(targetBlockId, highlightStairsId)}
                >
                    <g transform={transform}>
                        <rect x={x} y={y} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.2} y={y} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <path
                            d={`
                                m${x + width * 0.4} ${y + height * 0.25}
                                l${width * -0.3} 0
                                l0 ${height * 0.1}
                                l${width * -0.1} ${height * -0.1}
                                l${width * 0.1} ${height * -0.1}
                                l0 ${height * 0.1}
                                l${width * 0.3} 0
                            `}
                            fill="#333"
                            stroke="#333"
                            strokeWidth="0.75"
                        />
                    </g>
                    <path
                        d={`
                            m${x + width * 0.4} ${y + height * (turning ? 1 : 0.5)}
                            l${width * 0.2} 0
                        `}
                        fill="none"
                        stroke="#333"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                    <path
                        d={`
                            m${x + width * 0.36} ${y + height * (turning ? 0.4 : -0.1)}
                            l${width * 0.12} ${height * 0.3}
                            l${width * 0.1} 0
                            l${width * -0.15} ${height * 0.1}
                            l${width * 0.1} 0
                            l${width * 0.12} ${height * 0.3}
                        `}
                        fill="none"
                        stroke="#333"
                        strokeWidth="0.5"
                    />
                </g>
            );
        }
        else if (stairsId === 3) {
            return (
                <g
                    transform={rotate}
                    onClick={() => handleStairsClick(targetBlockId, highlightStairsId)}
                >
                    {turning ?
                        <path
                            d={`
                                m${x + width * 0.4} ${y}
                                l${width * 0.2} 0
                            `}
                            fill="none"
                            stroke="#333"
                            strokeWidth="1"
                            opacity="0.5"
                        />
                        : ""
                    }
                    <g transform={transform}>
                        <rect x={x} y={y} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.2} y={y} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.4} y={y} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.6} y={y} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.8} y={y} width={width * 0.2} height={height} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.6} y={y + height * 0.5} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <path
                            d={`
                                m${x + width * 0.6} ${y + height * 0.75}
                                l${width * 0.3} 0
                                l0 ${height * -0.5}
                                l${width * -0.8} 0
                                l0 ${height * 0.1}
                                l${width * -0.1} ${height * -0.1}
                                l${width * 0.1} ${height * -0.1}
                                l0 ${height * 0.1}
                                l${width * 0.8} 0
                                l0 ${height * 0.5}
                                l${width * -0.3} 0
                            `}
                            fill="#333"
                            stroke="#333"
                            strokeWidth="0.75"
                        />
                    </g>
                    <path
                        d={`
                            m${x + width * 0.36} ${y + height * (turning ? -0.1 : 0.4)}
                            l${width * 0.12} ${height * 0.3}
                            l${width * 0.1} 0
                            l${width * -0.15} ${height * 0.1}
                            l${width * 0.1} 0
                            l${width * 0.12} ${height * 0.3}
                        `}
                        fill="none"
                        stroke="#333"
                        strokeWidth="0.5"
                    />
                </g>
            );
        }
        else if (stairsId === 4) {
            return (
                <g
                    transform={rotate}
                    onClick={() => handleStairsClick(targetBlockId, highlightStairsId)}
                >
                    <path
                        d={`
                            m${x + width * 0.4} ${y + height * (turning ? 0 : 0.5)}
                            l${width * 0.2} 0
                        `}
                        fill="none"
                        stroke="#333"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                    <g transform={transform}>
                        <rect x={x + width * 0.6} y={y} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.8} y={y} width={width * 0.2} height={height} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <rect x={x + width * 0.6} y={y + height * 0.5} width={width * 0.2} height={height * 0.5} fill={rectColor} stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                        <path
                            d={`
                                m${x + width * 0.6} ${y + height * 0.75}
                                l${width * 0.3} 0
                                l0 ${height * -0.5}
                                l${width * -0.2} 0
                                l0 ${height * 0.1}
                                l${width * -0.1} ${height * -0.1}
                                l${width * 0.1} ${height * -0.1}
                                l0 ${height * 0.1}
                                l${width * 0.2} 0
                                l0 ${height * 0.5}
                                l${width * -0.3} 0
                            `}
                            fill="#333"
                            stroke="#333"
                            strokeWidth="0.75"
                        />
                    </g>
                    <path
                        d={`
                            m${x + width * 0.36} ${y + height * (turning ? -0.1 : 0.4)}
                            l${width * 0.12} ${height * 0.3}
                            l${width * 0.1} 0
                            l${width * -0.15} ${height * 0.1}
                            l${width * 0.1} 0
                            l${width * 0.12} ${height * 0.3}
                        `}
                        fill="none"
                        stroke="#333"
                        strokeWidth="0.5"
                    />
                </g>
            );
        }
    }

    const handleStairsClick = (targetBlockId: string, highlightStairs: string) => {
        setBlockId(targetBlockId);
        setHighlightStairs(highlightStairs);
    };

    // 廊下を描く
    const drawCorridor = (currentBlockId: string) => {
        if (currentBlockId === "S1") {
            return (
                <>
                    <rect x="230" y="60" width="410" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="60" width="10" height="690" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="260" y="350" width="350" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="80" width="50" height="30" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="430" width="50" height="30" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="640" width="50" height="110" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="270" y="670" width="30" height="50" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>

                    {/*<rect x="695" y="330" width="25" height="5" fill="blue" />
                    <rect x="695" y="330" width="5" height="25" fill="blue" />
                    <rect x="740" y="330" width="25" height="5" fill="blue" />
                    <rect x="760" y="330" width="5" height="25" fill="blue" />*/}
                </>
            )
        }
        else if (currentBlockId === "S2") {
            return (
                <>
                    <rect x="230" y="60" width="470" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="60" width="10" height="630" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="200" y="350" width="460" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="80" width="50" height="30" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="430" width="50" height="30" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="360" y="670" width="180" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="640" width="50" height="30" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="270" y="690" width="120" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="280" y="690" width="20" height="60" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                </>
            )
        }
        else if (currentBlockId === "S3") {
            return (
                <>
                    <rect x="110" y="60" width="560" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="60" width="10" height="630" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="200" y="350" width="470" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="80" width="50" height="30" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="430" width="50" height="30" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="360" y="670" width="150" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="440" y="640" width="50" height="30" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="250" y="690" width="140" height="20" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="280" y="690" width="20" height="60" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="450" y="140" width="40" height="210" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                    <rect x="450" y="170" width="60" height="180" fill="#ccc" /*stroke="#0f0"*/ strokeWidth="3" /*opacity="0.5" *//>
                </>
            )
        }
    }

    // 階段を描く
    const drawStairs = (currentBlockId: string) => {
        if (currentBlockId === "S1") {
            return (
                <>
                    {baseStairs(0, 450, 640, 40, 30, true, 0, "S2", "a")}
                    {baseStairs(1, 450, 430, 40, 30, false, 0, "S2", "b")}
                    {baseStairs(1, 450, 80, 40, 30, false, 0, "S2", "c")}
                    {baseStairs(1, 280, 710, 20, 40, true, 1, "S2", "d")}
                </>
            )
        }
        else if (currentBlockId === "S2") {
            return (
                <>
                    {baseStairs(0, 450, 640, 40, 30, true, 0, "S3", "e")}
                    {baseStairs(2, 450, 640, 40, 30, true, 0, "S1", "a")}
                    {baseStairs(1, 450, 430, 40, 30, false, 0, "S3", "f")}
                    {baseStairs(3, 450, 430, 40, 30, false, 0, "S1", "b")}
                    {baseStairs(1, 450, 80, 40, 30, false, 0, "S3", "g")}
                    {baseStairs(4, 450, 80, 40, 30, false, 0, "S1", "c")}
                    {baseStairs(1, 280, 710, 20, 40, true, 1, "S3", "h")}
                    {baseStairs(3, 280, 710, 20, 40, true, 1, "S1", "d")}
                </>
            )
        }
        else if (currentBlockId === "S3") {
            return (
                <>
                    {baseStairs(2, 450, 640, 40, 30, true, 0, "S2", "e")}
                    <rect x="450" y="640" width="40" height="30" fill="none" stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                    {baseStairs(3, 450, 430, 40, 30, false, 0, "S2", "f")}
                    <rect x="450" y="430" width="40" height="30" fill="none" stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                    {baseStairs(4, 450, 80, 40, 30, false, 0, "S2", "g")}
                    <path d="m474 95 l-24 0 l0 15 l24 0" fill="none" stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                    {baseStairs(3, 280, 710, 20, 40, true, 1, "S2", "h")}
                    <rect x="280" y="710" width="20" height="40" fill="none" stroke="#333" strokeWidth="1" /*opacity="0.5" *//>
                </>
            )
        }
    }

    return (
        <div
            style={{
                width: "320px",
            }}
        >
            <svg viewBox="0 0 960 960">
                {/* 背景 */}
                <rect width="4096" height="4096" fill="#f4f4f4" />

                {/* 廊下 */}
                {/*<rect x="100" y="50" width="30" height="10" fill="#f00" />
                <rect x="100" y="50" width="10" height="30" fill="#f00" />
                <rect x="100" y="140" width="30" height="10" fill="#f44" />
                <rect x="100" y="120" width="10" height="30" fill="#f44" />

                <rect x="740" y="50" width="30" height="10" fill="#f88" />
                <rect x="760" y="50" width="10" height="30" fill="#f88" />
                <rect x="740" y="140" width="30" height="10" fill="#b00" />
                <rect x="760" y="120" width="10" height="30" fill="#b00" />


                <rect x="190" y="340" width="30" height="10" fill="#b44" />
                <rect x="190" y="340" width="10" height="30" fill="#b44" />
                <rect x="190" y="430" width="30" height="10" fill="#b88" />
                <rect x="190" y="410" width="10" height="30" fill="#b88" />

                <rect x="740" y="340" width="30" height="10" fill="red" />
                <rect x="760" y="340" width="10" height="30" fill="red" />
                <rect x="740" y="430" width="30" height="10" fill="red" />
                <rect x="760" y="410" width="10" height="30" fill="red" />


                <rect x="210" y="680" width="30" height="10" fill="red" />
                <rect x="210" y="680" width="10" height="30" fill="red" />
                <rect x="210" y="750" width="30" height="10" fill="red" />
                <rect x="210" y="730" width="10" height="30" fill="red" />

                <rect x="610" y="660" width="30" height="10" fill="red" />
                <rect x="630" y="660" width="10" height="30" fill="red" />
                <rect x="610" y="750" width="30" height="10" fill="red" />
                <rect x="630" y="730" width="10" height="30" fill="red" />*/}
                {drawCorridor(currentBlock.id)}

                {/* 部屋と部屋名 */}
                {currentBlock.groups.flatMap(group => group.rooms).map((room) => {
                    const isHighlighted = highlighted.includes(room.id);
                    const isSelected = selectedRoom?.id === room.id;
                    return (
                        <g
                            key={room.id}
                            onClick={() => setRoom(room)}
                        >
                            <rect
                                x={room.x}
                                y={room.y}
                                width={room.width - 0.5}
                                height={room.height - 0.5}
                                fill={room.fill}
                                stroke={isSelected ? "yellow" : "black"}
                                strokeWidth={1}
                                opacity={highlighted.length > 0 && !isHighlighted ? 0.3 : 1}
                            />
                            <text
                                x={room.x + room.width / 2}
                                y={room.y + room.height / 2}
                                fontSize={roomNameFontSize(room)}
                                fill="black"
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                style={{
                                    writingMode: room.height > room.width ? 'vertical-rl' : 'horizontal-tb'
                                }}
                            >
                                {room.name}
                            </text>
                        </g>
                    );
                })}
                {drawStairs(currentBlock.id)}
            </svg>
        </div>
    );
};

export default Map;