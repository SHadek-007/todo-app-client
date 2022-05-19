import React from 'react';

const TodoList = ({todo,handleTodoDelete}) => {
    const {task, description} = todo;
    return (
        <>
            <td>{task}</td>
            <td>{description} </td>
            <td><button onClick={()=>handleTodoDelete(todo._id)} className="btn btn-danger">Delete</button></td>
        </>
    );
};

export default TodoList;