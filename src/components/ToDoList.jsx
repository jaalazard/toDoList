import ToDoAddItem from "./ToDoAddItem";
import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoSubmit from "./ToDoSubmit";

export default function ToDoList() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((prev) => [...prev, item]);
    };

    const removeItem = (index) => {
        setItems((prev) => {
 const newItems = Array.from(prev);
 newItems.splice(index, 1);
 return newItems;
        });
    };
        

    return (
    <>
<ToDoAddItem onAddItem={addItem} />
{items}
{items.map((item, index) => <ToDoItem key={index} index={index} onRemoveItem={removeItem} item={item}/>
)}
<ToDoSubmit items={items}/>
    </>
    );
    
}
