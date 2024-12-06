import { useState } from "react";
import Swal from 'sweetalert2';
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]) // items ki state create kar rahe hain, jo initially khali hai

  // Naye item ko list mein add karne ka function
  function handleAddItems(item) {
    setItems((items) => [...items, item]) // naye item ko existing items ke sath array mein daal rahe hain
  }

  // Kisi item ko delete karne ka function
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)) // item id ke zariye filter karke delete kar rahe hain
  }

  // Kisi item ko toggle (packed ya unpacked) karne ka function
  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
    // agar item ka id match hota hai, toh item ki 'packed' property ko ulat rahe hain
  }

  // List ko clear karne ka function
  function handleClearList() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setItems([]); // Clear the list if confirmed
        Swal.fire({
          title: "Deleted!",
          text: "Your list has been cleared.",
          icon: "success"
        });
      }
    });
  }


  return (
    <div className="app"> {/* Main app container */}
      <Logo />{/* Logo component render kar rahe hain */}
      <Form onAddItems={handleAddItems} /> {/* Form component, jis mein item add karne ka option hai */}
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem} clearList={handleClearList} /> {/* Packing list render kar rahe hain */}
      <Stats items={items} /> {/* Stats component render kar rahe hain */}
    </div>
  )
}


