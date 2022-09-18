import React, { useState, useEffect } from "react";
import "../styles/App.css";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

let Color;

const App = () => {
  const [quotes, setQuotes] = useState();
  const [author, setAuthor] = useState();

  function fetching() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((res) => {
        setQuotes(res.content);
        setAuthor(res.author);
      });
    Color = parseInt(Math.random() * 12);
    document.body.style.backgroundColor = colors[Color];
  }

  return (
    <div id="main">
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i>{quotes}</i>
          </div>
          <div className="quote-author">{author}</div>

          <div className="buttons">
            <button className="button" onClick={fetching} id="new-quote">
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
