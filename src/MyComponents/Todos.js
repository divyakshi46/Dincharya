import React from 'react';
import { Todoitem } from "../MyComponents/Todoitem";
import './Todos.css'; // Import the CSS file

export const Todos = (props) => {
  return (
    <div className="container my-3">
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <Todoitem todo={todo} key={todo.Sno} onDelete={props.onDelete} />
          )
        })
      }
    </div>
  );
}



