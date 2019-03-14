import React from 'react';
import Items from './Items';



function ItemList (props) {
    return (
        <div>
            <Items name={props.name} />
        </div>
    )
}

export default ItemList;

// class ItemList extends React.Component {
//     constructor (props){
//         super(props)
//         this.state = { 
//             // name: ['item1', 'item2'],
//             // items: [],
//             // error: ''
//          }
//     }
    
//     render() { 
//         return (
//             <div>

//                 <Items name={this.props.name} key={this.state} addItem={this.addItem} />

//             </div>
//         )

//     }
// }
 
