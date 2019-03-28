import React, { Component } from "react";
import Potato from "./components/Potato";
import PotatoCounter from "./components/PotatoCounter";
import {} from "react-bulma-components/full";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Potato />
      </div>
    );
  }
}

export default App;
