import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Todos = () => {
    const [todos,setTodos]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setTodos(data))
    },[])
    return (
        <div>
            <h1>All Todos</h1> 
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3   ">
           
           {
               todos.map(todo=> <Todo todo={todo} key={todo.id}></Todo>)

           }
        </div>
        </div>
        
    );
};

export default Todos;