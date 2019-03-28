import React, { Component } from "react";

class PotatoCounter extends Component {
  constructor(props) {
    super();
    this.state = {
      potatoes: 1
    };
  }

  onAddPotato() {
    this.setState(prevState => {
      return { potatoes: prevState.potatoes + 1 };
    });
  }

  render() {
    return (
      <div className="PotatoCounter">
        <p className="is-size-3">You have {this.state.potatoes} potato :)</p>
        <hr />
        <button
          className="button is-large is-primary"
          onClick={() => this.onAddPotato()}
        >
          Add a potato!
        </button>
      </div>
    );
  }
}

export default PotatoCounter;
