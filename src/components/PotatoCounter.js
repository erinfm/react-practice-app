import React, { Component } from "react";

class PotatoCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      potatoes: 1
    };
    this.onAddPotato = this.onAddPotato.bind(this);
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
          onClick={this.onAddPotato}
        >
          Add a potato!
        </button>
      </div>
    );
  }
}

export default PotatoCounter;
