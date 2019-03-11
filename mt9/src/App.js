import React, { Component } from 'react';
import Items from './components/Items/Items';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        
      ],
    };
    
  }
  
  

  componentDidMount(){
    console.log('cdm running');

   axios
       .get('')
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
    console.log(this.state);
    return (
      <div className="App">

        
      </div>
    );
  }
}

export default App;