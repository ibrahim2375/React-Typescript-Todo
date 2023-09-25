import React, { useState } from 'react';
import './App.css';
//components
import InputText from './components/InputText';
import TodoList from './components/TodoList';
import { Todo } from './models';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
//  functtion handle submit 
  const handleAdd = (e:React.FormEvent) => {
   e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isCompleted:false}])
      setTodo("");
    }
  }

  return (
    <div className="todo">
      <h1>Todo App</h1>
      <InputText todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
