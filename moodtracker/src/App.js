import React, { useState } from "react";

function App() {

  const [mood, setMood] = useState("Neutral");

  const getMoodStyle = () => {
    switch(mood){
      case "Happy":
        return {backgroundColor:"#ffe066"};
      case "Sad":
        return {backgroundColor:"#74c0fc"};
      case "Angry":
        return {backgroundColor:"#ff6b6b"};
      case "Excited":
        return {backgroundColor:"#69db7c"};
      default:
        return {backgroundColor:"#f1f3f5"};
    }
  };

  return (
    <div style={{textAlign:"center", padding:"50px", ...getMoodStyle()}}>
      
      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <button onClick={() => setMood("Happy")}>😊 Happy</button>
      <button onClick={() => setMood("Sad")}>😢 Sad</button>
      <button onClick={() => setMood("Angry")}>😡 Angry</button>
      <button onClick={() => setMood("Excited")}>🤩 Excited</button>

    </div>
  );
}

export default App;