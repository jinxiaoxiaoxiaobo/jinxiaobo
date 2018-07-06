import React, { Component } from 'react';
import App from './zhaozhu';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store/index..js';

class Todolist extends Component {
	constructor(){
        super();

        this.state=store.getState();
        store.subscribe(this.jiajiajia.bind(this))
      
  }
	shanchu(n){
 const action={
		type:"shanchu",
		index:n
	}
	store.dispatch(action);
	 
    }
jiajiajia(){
	this.setState(
		store.getState())
}
handleChange(e){
	const action={
		type:"xgipt",
		value:e.target.value
	}
	store.dispatch(action);
}
tianjia(){
	if(this.state.value==""){
		return
	}
	const action={
		type:"tj",
	}
	store.dispatch(action);
}
  render() {
    return (
          <div style={{marginTop:"10px",marginLeft:"50px"}}>
           <Input placeholder="Basic usage" style={{width:"300px"}} value={this.state.value} onChange={this.handleChange.bind(this)}/>
            <Button type="danger" onClick={this.tianjia.bind(this)}>添加</Button>
                  
                    
                   
               <List style={{width:"300px"}}
     
      bordered
      dataSource={this.state.list}
      renderItem={(item,index) => (<List.Item onClick={this.shanchu.bind(this,index)}><App list={item} /></List.Item>)}
    />   
           </div>
    )
  
    }
 
}

export default Todolist;
