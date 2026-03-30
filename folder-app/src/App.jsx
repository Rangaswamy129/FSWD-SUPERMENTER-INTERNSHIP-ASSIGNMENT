import { useState } from "react";

function App() {
  const [folders, setFolders] = useState([]);
  const [input, setInput] = useState("");

  const addFolder = () => {
    if (!input.trim()) return;
    setFolders([...folders, input]);
    setInput("");
  };

  const deleteFolder = (index) => {
    const updated = folders.filter((_, i) => i !== index);
    setFolders(updated);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>📁 Folder Architect</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter folder name"
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={addFolder}>Add</button>

      <div style={{ marginTop: "20px" }}>
        {folders.map((folder, index) => (
          <div key={index} style={{ margin: "10px" }}>
            {folder}
            <button
              onClick={() => deleteFolder(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;