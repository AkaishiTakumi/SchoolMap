import React from "react";
import CampusMap from "./components/CampusMap";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">校内マップ</h1>
      <CampusMap />
    </div>
  );
};

export default App;
