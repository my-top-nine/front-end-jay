import React from 'react';
import axios from 'axios';

class Items extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            items: []
        }
    }

     componentDidMount(){
         console.log('cdm running');

        axios
            .get(`https://top9backend.herokuapp.com/api/guest`)
            .then(res => {
                console.log(res);
                this.setState({ items: res.data });
              })
              .catch(err => {
                console.log(err);
                this.setState({ error: err });
              });
     }




    render() { 
        console.log(this.state.items)
        return ( 
            <div>
                <p>{this.state.items.map(i => <div> {i.name} </div>)}</p>
            </div>
         );
    }
}
 

export default Items;
