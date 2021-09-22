import React, { useState } from "react";
import "./todo.css";

const Todo = (props) => {
  // console.log(props.todo);
  const { id, title, completed } = props.todo;

  const [singleTodo, setSingleTodo] = useState([]);
  const getSingleInfo = (id) => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((res) => res.json())
      .then((data) => setSingleTodo(data));
  };
  console.log(singleTodo);
  return (
    <div className="col">
      <div className="col-item">
        <h1>ID:{id}</h1>
        <h3>Title:{title}</h3>
        <h4>Status:{completed}</h4>
        {/* <button className="btn btn-primary" onClick={()=>getSingleInfo(id)}>Details</button> */}

        {/* <!-- Button trigger modal --> */}
        <button
          onClick={() => getSingleInfo(id)}
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          details
        </button>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h1>ID:{singleTodo.id}</h1>
                <h3>Title:{singleTodo.title}</h3>
                <h4>Status:{singleTodo.completed}</h4>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
