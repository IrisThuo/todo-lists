import React from "react";
import TodoItem from "./todoitem";

function TodoList (props) {


    return(
        <div>
            {
         props.toDo.map((item, index) => (
            
        <TodoItem key={index} toDo={item} />
         ))
            }
              </div>
    );
    
};

export default TodoList;


