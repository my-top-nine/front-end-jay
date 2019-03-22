import React, { Component } from "react";
import axios from "axios";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  addItem = event => {
    event.preventDefault();

    axios
      .post("https://my-top-nine.herokuapp.com/api/categories", this.state)
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.props,
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      name: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.item]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="InputForm">
        <form onSubmit={this.addItem}>
          <input
            onChange={this.handleInputChange}
            placeholder="item"
            value={this.state.item}
            name="item"
          />
          <button type="submit">Add to top 9</button>
        </form>
      </div>
    );
  }
}

export default InputForm;
