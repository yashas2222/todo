 import React from "react";
 import './TodoList.css';
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


 function TodoList(props){
    const todo = props.todo;
    const listTodo = todo.map((item)=>{


        return(
            <div className="log"  key={item.key}>
            <p>{item.text}
            <span><FontAwesomeIcon className="icon" icon="trash" 
                onClick={ ()=> props.deleteTodo(item.key)} />
            </span>
             </p> 
            </div>
            )
    })
    return(
    <div>
        {listTodo}
    </div>)
}

 export default TodoList