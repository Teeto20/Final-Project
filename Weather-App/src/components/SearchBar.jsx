import {useState} from "react";

function SearchBar({ onSearch }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input);
            setInput("");
        }
    };
    return (
        <form onSubmit={handleSubmit}
        className="bg-gray-100 dark:bg-gray-800 flex space-x-2 mb-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for a city..."
                className="borderpx-4 py-2 w-60 rounded-lg"
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Search
            </button>
        </form>
    );
}

export default SearchBar;