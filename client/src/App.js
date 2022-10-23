import "./App.css";

function App() {
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
        <div className="List">
          <div className="ListItem">placeholder</div>
          <div className="ListItem">placeholder 1</div>
          <div className="ListItem">placeholder 2</div>
          <div className="ListItem">placeholder 3</div>
        </div>
        <div className="MainChart">
          <table>
            <tr>
              <th>.</th>
              <th>PlaceHolder</th>
              <th>PlaceHolder</th>
              <th>PlaceHolder</th>
            </tr>
            <tr>
              <td>A</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>B</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
