import React, { Component } from "react";
import PotatoCounter from "./PotatoCounter";
import potato2 from "../images/potato2.png";

const potatoStyle = {
  width: "200px",
  margin: "auto"
};

const potatoImgStyle = {
  display: "block",
  width: "100%",
  height: "auto",
  padding: "1rem 1rem 2rem 1rem"
};
class Potato extends Component {
  render() {
    return (
      <section class="hero is-fullheight is-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 class="title is-2">Hello (potato) world</h1>
            <figure style={potatoStyle} class="image">
              <img style={potatoImgStyle} src={potato2} />
            </figure>
            <PotatoCounter />
          </div>
        </div>
      </section>
    );
  }
}

export default Potato;
