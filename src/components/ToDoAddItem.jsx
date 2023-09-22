import { useState } from "react";
export default function ToDoAddItem({ onAddItem }) {
  const [value, setValue] = useState("");

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        onAddItem(value);
        setValue("");}}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button>Ajouter</button>
      </form>
    </>
  );
}
