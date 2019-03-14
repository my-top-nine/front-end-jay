import React from 'react';
import Items from './Items';
import InputForm from '../InputForm/InputForm';
import axios from 'axios';




class ItemList extends React.Component {
    constructor (props){
        super(props)
        this.state = { 
            ItemList: [],
            items: [],
            error: ''
         }
    }

    addItem = (e, item) => {
        axios
           .post('', item)
           .then( res => {
               console.log(res);
               this.setState({
                   items: res.data
               });
               this.props.history.push()
           })
           .catch( err => {
               console.log(err)
           })
    }
    
    render() { 
        return (
            <div>

                <Items name={this.state.name}  addItem={this.addItem} />

            </div>
        )

    }
}
 

export default ItemList;