import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { 
    Card,
    CardTitle
 } from 'reactstrap';

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
            <div style={{ display:'flex', justifyContent: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                {this.state.items.map(i =>  {
                    return (
                        
                        <Card style={{width: '75%'}} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle >{i.name}</CardTitle>
                        </Card>
                        
                        
                    )
                } )}
            </div>
         );
    }
}
 

export default Items;
