import React from 'react'
import { Todo } from '../models';
import SingleTodo from './SingleTodo';
//css
import '../css/TodoList.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
function TodoList({ todos, setTodos }: Props) {
  return (
    <div className='list'>
      {todos.map((todo) => (
        // <li key={todo.id}>{todo.todo}</li>
        <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList