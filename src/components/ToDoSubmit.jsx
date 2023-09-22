export default function ToDoSubmit({items}) {

    const saveItems = () => {
        console.log(items);
    }
    return (
        <>
        <button onClick={saveItems}>Valider</button>
        </> 
    );
}