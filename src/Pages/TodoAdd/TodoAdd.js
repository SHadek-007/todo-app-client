import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import TodoList from "../TodoList/TodoList";

const TodoAdd = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch("https://blooming-shelf-97814.herokuapp.com/todo")
      .then((res) => res.json())
      .then((data) => setTodoList(data));
  }, []);

  const handleTodoDelete = (id) => {
    console.log(id);
    const url = `https://blooming-shelf-97814.herokuapp.com/delete/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainig = todoList.filter((todo) => todo._id !== id);
          setTodoList(remainig);
        }
      });
  };

  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const todo = { task, description };
    fetch("https://blooming-shelf-97814.herokuapp.com/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodoList([...todoList, data]);
      });
  };

  return (
    <div>
      <h2 className="text-center">To Do List</h2>

      <Form onSubmit={handleForm} className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            onBlur={handleTask}
            name="task"
            type="text"
            placeholder="Add Task Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onBlur={handleDescription}
            name="description"
            as="textarea"
            placeholder="Add Task Description"
            rows={3}
            required
          />
        </Form.Group>
        <button className="btn btn-success d-block mx-auto" type="submit">
          Add Task
        </button>
      </Form>
      <h2 className="text-center mt-5">All To Do List</h2>
      <Table className="border w-75 mx-auto">
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <tr key={todo._id}>
              <TodoList
                handleTodoDelete={() => handleTodoDelete(todo._id)}
                todo={todo}
              ></TodoList>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoAdd;
