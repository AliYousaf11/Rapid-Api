import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [endpoint, setEndPoint] = useState("");
  const [container, setConatiner] = useState([]);
  const [finalpoint, setFinalPoint] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "59243b0ce3msh6853ee11700e1d7p199582jsn08607ae7ef87",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endpoint}`, options)
      .then((response) => response.json())
      .then((data) => setConatiner(data.d))
      .catch((err) => console.error(err));
  }, [finalpoint]);

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFinalPoint(endpoint);
        }}
      >
        <input
          type="text"
          value={endpoint}
          onChange={(e) => {
            setEndPoint(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="element">
        {container.map((e, index) => {
          return (
            <div key={index} className="element-div">
              <img src={e.i.imageUrl} alt="" />
              <p>Name: {e.l}</p>
              <p>Rank: {e.rank}</p>
              <p>Year: {e.y}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
