import React, { useState } from "react";
import {
	Button,
	Box,
	TextField,
	Autocomplete,
	Tabs,
	Tab,
	tabsClasses,
	Typography,
	IconButton,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import styled from "@emotion/styled";

import { buildings, Room, Floor } from "./data/rooms.ts";

const App: React.FC = () => {
	return (
		<div className="main">
			<FormGroup>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Label"
				/>
				<FormControlLabel
					required
					control={<Checkbox />}
					label="Required"
				/>
				<FormControlLabel
					disabled
					control={<Checkbox />}
					label="Disabled"
				/>
			</FormGroup>

			<DontSearch />

			<Title />
			<SearchRoom />

			<Map />
		</div>
	);
};

function Title() {
	return <div className="title">School Map</div>;
}

function DontSearch() {
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<Checkbox
			checked={checked}
			onChange={handleChange}
			inputProps={{ "aria-label": "controlled" }}
		/>
	);
}

function SearchRoom() {
	const [searchRoomName, setSearchRoomName] = useState<string>("");

	// テキストボックスが変更されたら、State更新
	const handleTextBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSearchRoomName(e.target.value);
	};

	// ボタン押下でStateをコンソールに出力
	const submit = () => {};
	// Enterキー押下でStateをコンソールに出力
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.nativeEvent.isComposing || e.key !== "Enter") return;
		submit();
	};

	return (
		<span>
			<Autocomplete
				id="combo-box-demo"
				className="search-room"
				options={buildings
					.flatMap((build) =>
						build.floors.flatMap((floors) =>
							floors.rooms.map((room) => room.name)
						)
					)
					.sort()}
				getOptionLabel={(option) => option}
				renderInput={(params) => (
					<TextField
						{...params}
						label="教室を探す"
						variant="filled"
						value={searchRoomName}
						onChange={handleTextBox}
						onKeyDown={handleKeyDown}
					/>
				)}
				noOptionsText="見つかりませんでした"
			/>
		</span>
	);
}

function Map() {
	const [buildValue, setBuildValue] = useState(0);

	return (
		<div className="map">
			<BuildSwitcher
				buildValue={buildValue}
				setBuildValue={setBuildValue}
			/>
		</div>
	);
}

function BuildSwitcher({
	buildValue,
	setBuildValue,
}: {
	buildValue: number;
	setBuildValue: (buildValue: number) => void;
}) {
	const handleChange = (e: React.SyntheticEvent, newValue: number) => {
		setBuildValue(newValue);
	};

	return (
		<Box className="block-switcher">
			<Tabs
				className="block-switcher-tabs"
				value={buildValue}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons={true}
				aria-label="scrollable auto tabs example"
				sx={{
					[`& .${tabsClasses.scrollButtons}`]: { opacity: 0.3 },
				}}
			>
				{buildings.map((build) => (
					<Tab key={build.id} label={build.name} />
				))}
			</Tabs>

			<FloorSwitcher buildValue={buildValue} />
		</Box>
	);
}

function FloorSwitcher({ buildValue }: { buildValue: number }) {
	const [floorValue, setFloorValue] = useState(0);
	const [open, setOpen] = useState(true);

	const handleChange = (e: React.SyntheticEvent, newValue: number) => {
		setFloorValue(newValue);
	};

	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<Box className="floor-switcher">
			<Box
				className="floor-switcher-box"
				sx={{
					minWidth: open ? "min-content" : "max-content",
					transition: "width 0.3s ease",
				}}
			>
				<Box className="floor-switcher-box-hidebutton">
					<IconButton size="small" onClick={toggleOpen}>
						{open ? <ChevronLeft /> : <ChevronRight />}
					</IconButton>
				</Box>

				{/* タブは折り畳み後に隠れます */}
				{open && (
					<Tabs
						className="floor-switcher-tabs"
						orientation="vertical"
						variant="scrollable"
						value={floorValue}
						scrollButtons={true}
						onChange={handleChange}
						aria-label="Vertical tabs example"
						sx={{
							[`& .${tabsClasses.scrollButtons}`]: {
								"&.Mui-disabled": { opacity: 0.3 },
							},
						}}
					>
						{buildings.flatMap((build) =>
							build.floors.map((floors, index) => (
								<Tab key={index} label={`${floors.id}階`} />
							))
						)}
					</Tabs>
				)}
			</Box>
			<Box className="floor-switcher-makemap">
				<MakeMap
					buildValue={buildValue + 1}
					floorValue={floorValue + 1}
				/>
			</Box>

			{/*
			<Tabs
				className="floor-switcher-tabs"
				orientation="vertical"
				variant="scrollable"
				value={floorValue}
				scrollButtons={true}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				sx={{
					[`& .${tabsClasses.scrollButtons}`]: {
						"&.Mui-disabled": { opacity: 0.3 },
					},
				}}
			>
				{buildings.flatMap((build) =>
					build.floors.map((floors, index) => (
						<Tab key={index} label={`${floors.id}階`} />
					))
				)}
			</Tabs>
			<MakeMap buildValue={buildValue + 1} floorValue={floorValue + 1} />

			*/}
		</Box>
	);
}

function MakeRoom({ room }: { room: Room }) {
	if (room.shapes === "square")
		return (
			<>
				<rect
					x={room.parameters[0]}
					y={room.parameters[1]}
					width={room.parameters[2]}
					height={room.parameters[3]}
					fill={room.fill}
				/>
				{room.roomClass !== "廊下" && (
					<text
						x={room.parameters[0]}
						y={room.parameters[1] + 100}
						fill="white"
						fontSize={room.parameters[2] / room.name.length}
					>
						{room.name}
					</text>
				)}
			</>
		);
}

function MakeMap({
	buildValue,
	floorValue,
}: {
	buildValue: number;
	floorValue: number;
}) {
	return (
		<svg className="make-map" viewBox="0 0 2048 2048">
			{buildings.flatMap((build) => {
				if (build.id === buildValue) {
					return build.floors.flatMap((floor) => {
						if (floor.id === floorValue) {
							return floor.rooms.map((room) => (
								<MakeRoom room={room} key={room.id} />
							));
						}
					});
				}
			})}
		</svg>
	);
}

interface TabPanelProps {
	children?: React.ReactNode;
}

function TabPanel(props: TabPanelProps) {
	const { children, ...other } = props;

	return (
		<div role="tabpanel" {...other}>
			<Box sx={{ p: 3 }}>
				<Typography>{children}</Typography>
			</Box>
		</div>
	);
}

//	const [blockId, setBlockId] = useState<string>("S1");
//	const [selectedRoom, setRoom] = useState<Room | null>(null);
//	const [highlighted, setHighlighted] = useState<string[]>([]);
//	const [showSubName, setShowSubName] = useState(true); // 追加
//	const { search, setSearch, handleSearch, clearSearch, errorMessage } =
//		useSearch(setBlockId, setRoom, setHighlighted);
//
//	const currentBlock = blocks.find((block) => block.id === blockId);
//
//	const handleRoomSelect = (room: Room) => {
//		setRoom(room);
//		clearSearch();
//	};
//
//	useEffect(() => {
//		const input = document.querySelector("input[type='text']");
//		if (input) {
//			input.addEventListener("focus", () => {
//				if (window.innerWidth <= 768) {
//					input.scrollIntoView({ behavior: "smooth" });
//					window.scrollBy(0, 20); // 20px上にスクロール
//				}
//			});
//		}
//	}, []);
//
//	if (!currentBlock) return <p>エラー: 階が見つかりません</p>;
//
//	return (
//		<div>
//			{/* タイトル */}
//			<h1>校内マップ</h1>
//
//			{/* 検索バー */}
//			<SearchBar
//				search={search}
//				setSearch={setSearch}
//				handleSearch={handleSearch}
//			/>
//
//			{/* エラーメッセージを表示 */}
//			{errorMessage && <p>{errorMessage}</p>}
//
//			{/* 階の切り替えボタン */}
//			<BuildSwitcher
//				currentBlockId={blockId}
//				blocks={blocks}
//				setBlockId={setBlockId}
//			/>
//
//			<div>
//				{/* マップ */}
//				<Map
//					currentBlock={currentBlock}
//					selectedRoom={selectedRoom}
//					showSubName={showSubName}
//					highlighted={highlighted}
//					setRoom={handleRoomSelect}
//					setBlockId={setBlockId}
//				/>
//
//				{/* イベント部屋スイッチ */}
//				<NameSwitch
//					showSubName={showSubName}
//					setShowSubName={setShowSubName}
//				/>
//
//				<div>
//					{/* 部屋リスト */}
//					<RoomList
//						rooms={currentBlock.groups.flatMap(
//							(group) => group.rooms
//						)}
//						setRoom={handleRoomSelect}
//						showSubName={showSubName}
//						selectedRoom={selectedRoom}
//					/>
//
//					{/* 部屋詳細 */}
//					{/*<RoomDetails
//                        selectedRoom={selectedRoom}
//                    />*/}
//				</div>
//			</div>
//		</div>
//	);
//};

export default App;
