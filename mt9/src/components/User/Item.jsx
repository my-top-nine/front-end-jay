import React, { Component } from "react";
import { getJwt } from "../Login/jwt";
import axios from "axios";
import { Card } from "reactstrap";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topnine: {},
      itemName: [],
      category: null,
      itemId: [],
      position: localStorage.getItem("item_pos")
    };

    let userId = localStorage.getItem("user_id");
    let itemId = localStorage.getItem("item_id");
    let itemCat = localStorage.getItem("item_cat");
    let itemPos = localStorage.getItem("item_pos");

    let filteredCat =
      itemCat === "Movies"
        ? 1
        : itemCat === "Video Games"
        ? 2
        : itemCat === "Music"
        ? 3
        : null;

    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: getJwt("token")
        }
      })
      .get(`https://top9backend.herokuapp.com/api/users/${userId}/${itemId}`)
      .then(res => {
        console.log(res.data.name);
        console.log(filteredCat);
        this.setState({
          itemName: res.data.name,
          category: filteredCat
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: getJwt("token")
        }
      })
      .get(`https://top9backend.herokuapp.com/api/users/${userId}/topnine`)
      .then(res => {
        console.log(res);
        this.setState({
          topnine: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    // this.changeHandle();

    // this.submitUpdate();
  }

  //   componentDidMount() {

  //     let userId = localStorage.getItem("user_id");
  //     let itemId = localStorage.getItem("item_id");
  //     let itemCat = localStorage.getItem("item_cat");
  //     let itemPos = localStorage.getItem("item_pos");

  //     console.log(this.state.itemName);

  //   }

  changeHandler = e => {
    this.setState({
      position: e.target.value
    });
    // console.log(e);
  };

  submitUpdate = () => {
    let userId = localStorage.getItem("user_id");

    let filtItemId = this.state.topnine
      .filter(i => {
        if (i.item === this.state.itemName) {
          return i;
        }
      })
      .map(e => e.id);

    console.log(filtItemId[0]);
    console.log(localStorage.getItem("item_cat"));
    console.log(this.state.position);

    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: getJwt("token")
        }
      })
      .put(
        `https://top9backend.herokuapp.com/api/users/${userId}/topnine/${
          filtItemId[0]
        }`,
        {
          id: filtItemId[0],
          category: localStorage.getItem("item_cat"),
          position: this.state.position
        }
      )
      .then(res => {
        console.log(res);
        console.log(this.itemCat);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.itemId.find(e => e !== undefined));

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card>
          {this.state.itemName}
          <br />
          {/* {this.state.itemId} */}
          <br />
          {this.state.position}
          <Form>
            <FormGroup>
              <Label htmlFor="position">Change Position</Label>

              <Input
                style={this.state.style}
                type="number"
                name="position"
                placeholder="Position"
                value={this.state.position}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <Button
              outline
              color="primary"
              type="button"
              onClick={this.submitUpdate}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Item;
