import ToDoAddItem from "./ToDoAddItem";
import { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {

    const [items, setItems] = useState([]);
    const addItem = (item) => {
        setItems((prev) => [...prev, item]);
    };

    return (
    <>
<ToDoAddItem onAddItem={addItem}/>
{items}
{items.map((item, index) => <ToDoItem key={index} item={item}/>
)}

    </>
    );
    
}