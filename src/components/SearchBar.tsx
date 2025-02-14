import React from "react";

interface SearchBarProps {
    search: string;
    setSearch: (value: string) => void;
    handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch, handleSearch }) => {
    return (
        <div className="flex gap-2 mb-4 w-full max-w-md">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="部屋名またはフロア名を入力..."
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
                検索
            </button>
        </div>
    );
};

export default SearchBar;
