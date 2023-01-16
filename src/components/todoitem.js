import React from "react";


function TodoItem (props) {

    return(
        <div className="toDoItem">
        <h1>{props.toDo.title}</h1>
        <p>{props.toDo.description}</p>
        </div>
    );
    
};
export default TodoItem;