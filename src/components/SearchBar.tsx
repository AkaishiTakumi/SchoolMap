import React from "react";

interface SearchBarProps {
    search: string;
    setSearch: (value: string) => void;
    handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch, handleSearch }) => {
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="部屋名またはフロア名を入力..."
            />
            <button
                onClick={handleSearch} 
            >
                検索
            </button>
        </div>
    );
};

export default SearchBar;
