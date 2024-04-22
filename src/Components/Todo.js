import React, { useState } from 'react';
import TodoForm from './TodoForm.js';
import { RiCloseCircleLine } from 'react-icons/ri';
import { MdDelete } from "react-icons/md";
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, updateTodos }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value) => {
    updateTodos(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
      <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        
        <MdDelete
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
       
      </div>
    </div>
  ));
}

export default Todo;
