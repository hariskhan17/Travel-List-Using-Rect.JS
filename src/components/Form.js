import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState(""); // Item description ki state
    const [quantity, setQuantity] = useState(1); // Item quantity ki state


    // Form submit hone par function
    function handleSubmit(e) {
        e.preventDefault(); // Default form submit ko rok rahe hain
        if (!description) return; // Agar description khali hai toh function se nikal ja rahe hain
        const newItem = { quantity, description, packed: false, id: Date.now() }; // Naya item create kar rahe hain

        onAddItems(newItem); // Naye item ko addItems function ke zariye add kar rahe hain
        setQuantity(1); // Quantity ko reset kar rahe hain
        setDescription(""); // Description ko khali kar rahe hain
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}> {/* Form element */}
            <h3>What do you need for your 😍 trip?</h3> {/* Form ka heading */}
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}> {/* Quantity select dropdown */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => ( // 1 se 20 tak quantity options generate kar rahe hain
                    <option value={num} key={num}>
                        {num} {/* Dropdown mein quantity number dikhana */}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="Items..." value={description} onChange={(e) => setDescription(e.target.value)} /> {/* Item description input field */}
            <button>Add</button> {/* Add button */}
        </form>
    );
}
