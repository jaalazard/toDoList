export default function ToDoItem({item, onRemoveItem, index}) {
    
    return (
        <>
        <div>{item}
        <button onClick={() => {onRemoveItem(index)}}>Supprimer</button></div>
        </>
    );
}