import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if(task.trim() !== ""){
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Dynamic Task List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{padding:"8px", width:"200px"}}
      />

      <button
        onClick={addTask}
        style={{marginLeft:"10px", padding:"8px"}}
      >
        Add
      </button>

      <ul style={{listStyle:"none", padding:"0", marginTop:"20px"}}>
        {taskList.map((t, index) => (
          <li key={index} style={{margin:"10px"}}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{marginLeft:"10px"}}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;