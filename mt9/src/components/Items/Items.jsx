import React from 'react';
import axios from 'axios';

class Items extends React.Component {
    constructor(props){
        super(props);

    }

    //  componentDidMount(){
    //      console.log('cdm running');

    //     axios
    //         .get('')
    //         .then(res => {
    //             console.log(res);
    //             this.setState({ items: res.data });
    //           })
    //           .catch(err => {
    //             console.log(err);
    //             this.setState({ error: err });
    //           });
    //  }

    //  addItem = (e, item) => {
    //      axios
    //         .post('', item)
    //         .then( res => {
    //             console.log(res);
    //             this.setState({
    //                 items: res.data
    //             });
    //             this.props.history.push()
    //         })
    //         .catch( err => {
    //             console.log(err)
    //         })
    //  }


    render() { 
        console.log()
        return ( 
            <div>

            </div>
         );
    }
}
 

export default Items;
