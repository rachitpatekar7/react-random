import { useState } from "react";
export default function App() {
  const [items, setItems] = useState("");
  const [todos, setTodos] = useState([]);
 
  function handlesubmit(e) {
    e.preventDefault();
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), name: items }];
    });
  }
  return (
    <>
    <form onSubmit = {handlesubmit}
    className="new-item-form">
      <div className = "form-row">
        <label htmlFor="item">New Item</label>
      <input value ={items}
       onChange={(e) => setItems(e.target.value)}  
       type="text" 
       placeholder="Add a new item" id="item"/>  
      </div>
      <button type="submit">Add</button>
    </form>
    <h1 className = "header">Shopping List</h1>
    <ul className="list">
  {todos.map(todo => (
    <li key={todo.id}>
      <label>
        <input type="checkbox" />
        {todo.name}
      </label>
      <button className="delete-btn">X</button>
    </li>
  ))}
</ul>
    </>
  );
}