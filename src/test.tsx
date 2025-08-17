import React, { useState } from "react";
import {
	Box,
	TextField,
	Autocomplete,
	Tabs,
	Tab,
	tabsClasses,
	Typography,
} from "@mui/material";

import { buildings, Room, Floor } from "./components/data/rooms.ts";

const App: React.FC = () => {
	return (
		<div className="main">
			<Title />
			<SearchRoom />

			<Map />
		</div>
	);
};

function Title() {
	return <div className="title">School Map</div>;
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
	const [floorValue, setFloorValue] = useState(0);

	return (
		<div className="map">
			<BuildSwitcher
				buildValue={buildValue}
				setBuildValue={setBuildValue}
			/>
			<FloorSwitcher
				buildValue={buildValue}
				floorValue={floorValue}
				setFloorValue={setFloorValue}
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
					[`& .${tabsClasses.scrollButtons}`]: {
						"&.Mui-disabled": { opacity: 0.3 },
					},
				}}
			>
				{buildings.map((build) => (
					<Tab key={build.id} label={build.name} />
				))}
			</Tabs>
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
				<text
					x={room.parameters[0]}
					y={room.parameters[1] + 15}
					fill="white"
					fontSize={room.parameters[2] / room.name.length}
				>
					{room.name}
				</text>
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
		<svg width="100%" height="100%" viewBox="0 0 1000 1000">
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

function FloorSwitcher({
	buildValue,
	floorValue,
	setFloorValue,
}: {
	buildValue: number;
	floorValue: number;
	setFloorValue: (floorValue: number) => void;
}) {
	const handleChange = (e: React.SyntheticEvent, newValue: number) => {
		setFloorValue(newValue);
	};

	return (
		<Box className="floor-switcher">
			<Tabs
				className="floor-switcher-tabs"
				orientation="vertical"
				variant="scrollable"
				value={floorValue}
				onChange={handleChange}
				aria-label="Vertical tabs example"
			>
				{buildings.flatMap((build) =>
					build.floors.map((floors, index) => (
						<Tab key={index} label={`${floors.id}階`} />
					))
				)}
			</Tabs>
			<TabPanel>
				<MakeMap buildValue={buildValue+1} floorValue={floorValue + 1} />
			</TabPanel>
		</Box>
	);
}

export default App;
