import React, {useState} from 'react'
import NavBar from "../components/navBar";
import TodoList from "../components/todolist";
import Footer from "../components/Footer";



function Home () {
    const [toDo , setToDo]= useState ([
        {
            "id" : 1,
            "title" : 'Learn React',
            "description" : 'Lorem ipsum'
        },
        {
            "id": 2,
            "title" : 'Go to the market',
            "description" : 'Lorem ipsum'
        }
    ])
    
    return(
        <div>
        <NavBar/>
        <TodoList toDo={toDo}/>
        <Footer/>
        </div>
    );
    
}

export default Home