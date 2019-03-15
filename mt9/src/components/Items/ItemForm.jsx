import React, { Component } from 'react';


export default class ItemForm extends React.Component {
  state = {
    newItem: {
      id: '',
      category: ''
    },
    position: ''
  }

  handleChange = e => {
    this.setState({ 
      newItem: {
        ...this.state.newItem,
        id: e.target.value
      }
     })
  }

  handleCat = e => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        category: e.target.value
      }
    })
  }

  handlePos = e => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        position: e.target.value
      }
    })
  }

  postAddNewItem = (e) => {
    this.props.postAddItem(e, this.state.newItem, this.props.history);
  }

  addItem = (e) => {
      this.props.postAddItem({
          item: {
              category: '',
              id: ''
          },
          position: ''
      })
  }

  render() {
    return(
      <div>
        <h3>Add Item:</h3>
            <form  onSubmit={this.addItem}>
                <input
                placeholder="id" 
                type="text"                
                name='name' 
                value={this.state.newItem.id} 
                onChange={this.handleChange}
                id="exampleText" />

                <input
                placeholder="category" 
                type="text"                name='category' 
                value={this.state.newItem.category} 
                onChange={this.handleCat}
                id="exampleText" />

                
                <input type="text"
                placeholder="position"                name='position' 
                value={this.state.position} 
                onChange={this.handlePos}
                id="exampleText" />

            <button>Submit</button>
        </form>
      </div>
    )
  }
}