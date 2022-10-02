import React from 'react';
import './App.css';
import TodoList from './TodoList';

import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);



class App extends React.Component{
 constructor(props){
  super(props);
  this.state={
    todo:[],
    currenttodo:{
      text:"",
      key:""
    }
  }
this.handlechange=this.handlechange.bind(this);
this.addItem=this.addItem.bind(this); 
this.deleteTodo=this.deleteTodo.bind(this);
 }
 handlechange(event){
  this.setState({
    currenttodo:{
      text:event.target.value,
      key:Math.floor(Math.random()*100)
    }
  });
 }
 
 addItem(event){
  event.preventDefault();
  const newItem=this.state.currenttodo
  console.log(newItem);

  if(newItem.text !==""){
    const newTodo=[...this.state.todo,newItem]
    this.setState({
      todo:newTodo,
      currenttodo:{
      text:"",
      key:""
    }
      
    })
  }
 }
 
 deleteTodo(key){
  const filterTodo=this.state.todo.filter((item) => item.key !==key);
  this.setState({
    todo:filterTodo
  });
 }
 
  render(){
    return(
      <div className='App'>
        <header>
        <h1 id='title'>To Do App</h1>
          <form id="to-do" onSubmit={this.addItem}>
            <input type="text" 
            placeholder="Enter Text"
            value={this.state.currenttodo.text} 
              onChange={this.handlechange}
            />
            <button type="submit">ADD</button> 
          </form>
        </header>
        <TodoList  todo={this.state.todo}
        deleteTodo={this.deleteTodo} />
      </div>

    );
  }
}



export default App;
