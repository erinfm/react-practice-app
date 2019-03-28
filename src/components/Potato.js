import React, { Component } from "react";
import PotatoCounter from "./PotatoCounter";

class Potato extends Component {
  render() {
    return (
      <section class="hero is-fullheight is-light">
        <div className="hero-body">
          <div className="section">
            <h1 class="title">Hello (potato) world</h1>
          </div>
          <PotatoCounter />
        </div>
      </section>
    );
  }
}

export default Potato;
