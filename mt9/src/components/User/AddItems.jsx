import React, { Component } from 'react';
import { 
    Button,
    FormGroup,
    Form,
    Label,
    Input
 } from 'reactstrap';

export const AddItems = (props) => {
    
        return (
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', boxSizing: 'border-box'}}>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {props.allItems.map(i => {
                        return <p key={i.id}> {i.item} </p>     
                    })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    {props.topNineItems.map(i => {
                        return <p key={i.id}> {i.item} </p>
                    })}
                </div>
                <Form >  
                        <FormGroup style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >

                            <Label htmlFor="username"> <h2> Add  Item! </h2></Label>
                            
                            <Input style={{ width: '20%'}} type="text" name="item" className="login-input"  placeholder="Item"  onChange={props.addItem}/>
                            
                        </FormGroup>
                        <FormGroup style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >



                            <Input style={{ width: '20%'}} type="text" name="position" className="login-input"  placeholder="Position"  onChange={props.addPosition}/>

                        </FormGroup>


                        <Button outline color="primary" type="button" onClick={props.submitItem } >Submit</Button>
                    </Form>

                    
                    <div style={{display: 'flex', justifyContent:'center', width: '50%', flexWrap:'wrap',  }}> 
                          <h3>Items to Choose From</h3>
                        <ul style={{overflowY: 'scroll', height: '150px'}}>
                            {props.itemList.map(i =>  <p key={i.id} style={{margin:'0 15px'}}> {i.name} </p> )}
                        </ul>
                    </div>
            </div>
        )
    
}