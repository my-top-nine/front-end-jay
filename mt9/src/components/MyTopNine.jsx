import React, { Component } from 'react';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import {getJwt} from './jwt';
import { 
    Button,
    FormGroup,
    Form,
    Label,
    Input
 } from 'reactstrap';

class MyTopNine extends Component {
    constructor(props){
        super(props);
        this.state = { 
            itemList: [],
            topNineItems: [].slice(0,9),
            item: null,
            position: null
         }
    }


    componentDidMount(){
        
        axios.create({ 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': getJwt('token')
            }})
            .get(`https://top9backend.herokuapp.com/api/users/${localStorage.getItem('user_id')}/all`)
            .then(res => {
                console.log(res);
                this.setState({ itemList: res.data })
            })
            .catch(err => {
                console.log(err);
            })


            axios.create({ 
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': getJwt('token')
                }})
                .get(`https://top9backend.herokuapp.com/api/users/${localStorage.getItem('user_id')}/topnine`)
                .then(res => {
                    console.log(res);
                    this.setState({ topNineItems: res.data.sort((a,b) => (a.position > b.position) ? 1 : -1).slice(0,9) })
                })
                .catch(err => {
                    console.log(err);
                })
    }



    itemData = e => {
        // e.preventDefault();
        console.log(e);
        return this.state.itemList.filter(i => {
            // console.log(i.name)
            
            return this.state.item === i.name ; 
        });
        
        
        
    }


      submitItem = e => {
        


        let filteredItem = this.itemData()[0]

        console.log(this.state.topNineItems);


        axios.create({ 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': getJwt('token')
            }})
            .post(`https://top9backend.herokuapp.com/api/users/${localStorage.getItem('user_id')}/topnine`, {
                
                id: filteredItem.id,
                category: filteredItem.category,
                position: this.state.position
            })
            .then(res => {
                console.log(res);
                
            })
            .catch(err => {
                console.log(err);
            })
      }




    addItem = e => {
        
        this.setState({...this.state, item: e.target.value}, e => {
            console.log(this.state.item);
        })
      }

      addPosition = e => {
        
        this.setState({...this.state, position: e.target.value}, e => {
            console.log(this.state.item);
        })
      }




    
    render() { 
        let allItems = this.state.itemList;
        let topNineItems = this.state.topNineItems;
        // console.log(allItems);
        console.log(this.itemData());
        return ( 
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {allItems.map(i => {
                        return <p key={i.id}> {i.item} </p>     
                    })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    {topNineItems.map(i => {
                        return <p key={i.id}> {i.item} </p>
                    })}
                </div>
                <Form >  
                        <FormGroup style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >

                            <Label htmlFor="username"> <h2> Add  Item </h2></Label>
                            
                            <Input style={{ width: '20%'}} type="text" name="item" className="login-input"  placeholder="Item"  onChange={this.addItem}/>
                            
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >



                            <Input style={{ width: '20%'}} type="text" name="position" className="login-input"  placeholder="Position"  onChange={this.addPosition}/>

                        </FormGroup>


                        <Button outline color="primary" type="button" onClick={this.submitItem } >Submit</Button>
                    </Form>
            </div>
         );
    }
}
 
export default MyTopNine;