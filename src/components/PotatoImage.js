import React, { Component } from "react";
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

class PotatoImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure style={potatoStyle} className="image">
        <img style={potatoImgStyle} src={potato2} alt="a potato" />
      </figure>
    );
  }
}

export default PotatoImage;
