import React, { Component } from "react";
import PotatoCounter from "./PotatoCounter";
import PotatoImage from "./PotatoImage";

class Potato extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2">Hello (potato) world</h1>
            <PotatoImage />
            <PotatoCounter />
          </div>
        </div>
      </section>
    );
  }
}

export default Potato;
