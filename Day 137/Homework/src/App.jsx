import { useState } from "react";
import React from "react";

function App() {
  const [Arr, setArr] = useState([])
  const [task, settask] = useState("");
  const [category, setCategory] = useState("Work");
  const [filter, setFilter] = useState("All")


  const AddTask = () => {
    if (task.trim() !== "") {
      setArr([...Arr,{ id: task, name: task, category, completed: false }])
      settask("");
    }
  };

  const Complete = (id) => {
    setArr(
      Arr.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const DeleteTask = (id) => {
    setArr(Arr.filter((task) => task.id !== id));
  };

  const array = filter === "All" ? Arr : Arr.filter((task) => task.category === filter)

  return (
    <div>
      <div>
        <input type="text" placeholder="Task Name" onChange={(e) => settask(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Sport">Sport</option>
          <option value="Study">Study</option>
        </select>
        <button onClick={AddTask}>Add Task</button>
      </div>

      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Work")}>Work</button>
        <button onClick={() => setFilter("Sport")}>Sport</button>
        <button onClick={() => setFilter("Study")}>Study</button>
      </div>

      <ul>
        {array.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => Complete(task.id)}/>
            <span style={{textDecoration: task.completed ? "line-through" : "none",}}>{task.name} ({task.category})</span>
            <button onClick={() => DeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
