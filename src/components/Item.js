export default function Item({ item, onDeleteItem, onToggleItems }) {
    return (
        <li> {/* Item list element */}
            <input type="checkbox" checked={item.packed} onChange={() => onToggleItems(item.id)} /> {/* Checkbox to toggle item packed state */}
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} : {item.description}</span> {/* Item details with strikethrough if packed */}
            <button onClick={() => onDeleteItem(item.id)}>❌</button> {/* Delete button */}
        </li>
    );
}
