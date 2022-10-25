import "./App.css";
import { useState } from "react";

function App() {
  const [NewName, SetNewName] = useState();

  const AddRow = (text) => {
    let child = document.createElement("tr");
    child.id = "row" + document.getElementById("table").children.length;
    console.log(child.id);
    let child2 = document.createElement("td");
    child2.innerHTML = text;
    child.appendChild(child2);

    for (
      let i = 0;
      i < document.getElementById("row0").children.length - 1;
      i++
    ) {
      let cellparent = document.createElement("td");
      let cell = document.createElement("input");
      cell.className = "cell";
      cellparent.appendChild(cell);
      child.appendChild(cellparent);
    }
    document.getElementById("table").appendChild(child);
  };

  const AddColumn = (text) => {
    let child2 = document.createElement("th");
    child2.innerHTML = text;
    document.getElementById("row0").appendChild(child2);

    for (let i = 1; i < document.getElementById("table").children.length; i++) {
      let cellparent = document.createElement("td");
      let cell = document.createElement("input");
      cell.className = "cell";
      cellparent.appendChild(cell);
      document.getElementById("row" + i).appendChild(cellparent);
    }
  };

  const AddToList = (text) => {
    let child = document.createElement("button");
    child.className = "ListItem";
    child.innerHTML = text;
    document.getElementById("List").appendChild(child);
  };

  return (
    <div className="App">
      <div className="NavBar">
        <button className="NavButton">1</button>
        <button className="NavButton">2</button>
        <button className="NavButton">3</button>
        <button className="NavButton">4</button>
        <button className="NavButton">5</button>
        <button className="NavButton">6</button>
      </div>
      <div className="Container">
        <div className="List" id="List">
          <input
            type="text"
            placeholder="name"
            onChange={(e) => {
              SetNewName(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              AddToList(NewName);
            }}
          >
            Add New
          </button>
        </div>

        <div className="MainChart">
          <button
            onClick={() => {
              AddRow("text");
            }}
          >
            AddRow
          </button>
          <button
            onClick={() => {
              AddColumn("text");
            }}
          >
            AddColumn
          </button>
          <table id="table">
            <tr id="row0">
              <th>.</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
