import React, { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState([
    { id: 1, state: "empty", clicked: false },
    { id: 2, state: "empty", clicked: false },
    { id: 3, state: "empty", clicked: false },
    { id: 4, state: "empty", clicked: false },
    { id: 5, state: "empty", clicked: false },
    { id: 6, state: "empty", clicked: false },
    { id: 7, state: "empty", clicked: false },
    { id: 8, state: "empty", clicked: false },
    { id: 9, state: "empty", clicked: false },
  ]);
  const [player, setPlayer] = useState("Player 1");
  const [winner, setWinner] = useState("");

  const handleClick = (id) => {
    console.log("handle clicked");
    console.log(id, "just id ");
    let copyStatus = [...status];
    copyStatus.forEach((item) => {
      if (item.id === id && player === "Player 1" && item.clicked === false) {
        item.state = "O";
        item.clicked = true;
        setPlayer("Player 2");
      } else if (
        item.id === id &&
        player === "Player 2" &&
        item.clicked === false
      ) {
        item.state = "X";
        item.clicked = true;
        setPlayer("Player 1");
      }
    });
    setStatus(copyStatus);
  };
  const handleRestart = () => {
    let copyStatus = [...status];
    copyStatus.forEach((item) => {
      item.state = "empty";
      item.clicked = false;
    });
    setStatus(copyStatus);
  };

  const board = status.map((item) => {
    return (
      <div
        className="item"
        style={item.state === "X" ? { color: "#eb3c62" } : { color: "skyblue" }}
        onClick={() => {
          handleClick(item.id);
        }}
      >
        {item.state === "empty" ? "" : item.state === "X" ? "X" : "O"}
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div className="container">
        <div className="board">
          {board}
          <div className="restart" onClick={handleRestart}>
            Restart
          </div>
        </div>
        <div className="score">
          <h3 style={player === "Player 1" ? { color: "skyblue" } : { color: "#eb3c62" }}>{player}</h3>
          <h3>{winner} is the Winner!</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
