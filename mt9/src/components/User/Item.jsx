import React, { Component } from 'react';
import { getJwt } from "../Login/jwt";
import axios from 'axios';
import { 
    Card
   } from 'reactstrap';


class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemName: [],
            category: null,
            itemId: null
        }
    }


    componentDidMount(){
        let userId = localStorage.getItem("user_id");
        let itemId = localStorage.getItem("item_id");
        let itemCat = localStorage.getItem("item_cat");

        let filteredCat = itemCat === "Movies" ? 1 : itemCat === "Video Games" ? 2 : itemCat === "Music" ? 3 : null;

        axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: getJwt("token")
          }
        })
        .get(
          `https://top9backend.herokuapp.com/api/users/${userId}/${itemId}`
        )
        .then(res => {
          console.log(res);
          console.log(itemCat);
          this.setState({ 
              itemName: res.data.name,
              category: filteredCat,
              itemId: res.data.id
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
        .put(
          `https://top9backend.herokuapp.com/api/users/${userId}/topnine/${itemId}`, {test: 'test'}
        )
        .then(res => {
          console.log(res);
          console.log(itemCat);
          this.setState({ 
              itemName: res.data.name,
              category: filteredCat,
              itemId: res.data.id
            });
        })
        .catch(err => {
          console.log(err);
        });

    }




    render() {
        console.log(this.state.category);
        return (
            <div style={{ display:'flex', justifyContent:'center'}}>
                <Card>
                    {this.state.itemName}
                    {this.state.test}
                </Card>
            </div>
        )
    }

}
 
export default Item;