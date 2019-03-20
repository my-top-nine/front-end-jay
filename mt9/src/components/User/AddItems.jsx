import React, { Component } from 'react';
import { 
    Button,
    FormGroup,
    Form,
    Label,
    Input
 } from 'reactstrap';

 class AddItems extends Component {
     constructor(props){
         super(props)
         this.state = {

         }


     }

    itemName = (j) => {
        
        this.props.allItems.map(e => {
            if (e.name === j){
                console.log(e.id);
                localStorage.setItem('item_id', (e.id));
            }
     })
    }
  
     render() { 
         return (
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', boxSizing: 'border-box'}}>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {this.props.allItems.map(i => {
                        return <p key={i.id}> {i.item} </p>     
                    })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}  >
                    {this.props.topNineItems.map(i => {
                        return <div><p key={i.id} onClick={() => {
                            console.log(this.itemName(i.item));
                            this.itemName(i.item);
                            localStorage.setItem('item_name', i.item);
                            localStorage.setItem('item_cat', i.category);
                            this.props.history.push(`/top9/${localStorage.getItem('item_name')}`)
                        }}> {i.item}{i.category}  </p> <Button onClick={() => this.props.deleteItem(i.id)}>Delete</Button> </div> 
                    })}
                </div>
                <Form >  
                        <FormGroup style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >

                            <Label htmlFor="username"> <h2> Add  Item! </h2></Label>
                            
                            <Input style={{ width: '20%'}} type="text" name="item" className="login-input"  placeholder="Item"  onChange={this.props.addItem}/>
                            
                        </FormGroup>
                        {/* <FormGroup style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >



                            <Input style={{ width: '20%'}} type="text" name="position" className="login-input"  placeholder="category"  onChange={props.addCategory}/>

                        </FormGroup>     */}
                        <FormGroup style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >



                            <Input style={{ width: '20%'}} type="text" name="position" className="login-input"  placeholder="Position"  onChange={this.props.addPosition}/>

                        </FormGroup>


                        <Button outline color="primary" type="button" onClick={this.props.submitItem } >Submit</Button>
                    </Form>

                    
                    <div style={{display: 'flex', justifyContent:'center', width: '50%', flexWrap:'wrap',  }}> 
                          <h3>Items to Choose From</h3>
                        <ul style={{overflowY: 'scroll', height: '150px'}}>
                            {this.props.itemList.map(i =>  <p key={i.id} style={{margin:'0 15px'}}> {i.name} </p> )}
                        </ul>
                    </div>
            </div>
        )
     }
 }
  

 export default AddItems;



