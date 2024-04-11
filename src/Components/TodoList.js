import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);


  return (
    <div>
      <h1>What's the plan for today?</h1>
      
      <Todo/>
    </div>
  )
}

export default TodoList
