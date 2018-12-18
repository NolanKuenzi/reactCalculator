import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Calc } from './app.js';

function Header() {
  return (
    <div id="header">
      <h1>React Calculator</h1>
    </div>  
  );
}
function App() {
  return (
    <div>
      <Header />
      <Calc />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
