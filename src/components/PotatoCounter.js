import React, { Component } from "react";

class PotatoCounter extends Component {
  constructor(props) {
    super();
    this.state = {
      potatoes: 0
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
        <p>You have {this.state.potatoes} potatoes</p>
        <button
          className="button is-medium is-primary"
          onClick={() => this.onAddPotato()}
        >
          Add a potato!
        </button>
      </div>
    );
  }
}

export default PotatoCounter;
