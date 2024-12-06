import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItems, clearList }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description")
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description)); // Fixing 'localeCompare'
    if (sortBy === "packed")
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list"> {/* Packing list container */}
            <ul>{sortedItems.map((item) => ( // Har item ke liye Item component render kar rahe hain
                <Item item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} key={item.id} /> // Fixing 'onDeleteItem'
            ))}</ul>

            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input orders</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={clearList}>Clear List</button>
            </div>

        </div>
    );
}
