import React, { useEffect, useRef, useState } from "react";
//css file
import "../css/SingleTodo.css";
//icons
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

import { Todo } from "../models";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
function SingleTodo({ todo, todos, setTodos }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  //done function
  const handleDone = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };
  // delete function
  const handleDelete = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // submit edition function
  const handleSubmit = (e: React.FormEvent, id: number): void => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  //focus on input when edit change
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="singleTodo" onSubmit={(e) => handleSubmit(e, todo.id)}>
      {/* title case done or not style */}
      {edit ? (
        <input
        className="editableInput"
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isCompleted ? (
        <h1 className="title_done">{todo.todo}</h1>
      ) : (
        <h1 className="title_not">{todo.todo}</h1>
      )}

      <div className="icons">
        <div
          className="edit"
          onClick={() => {
            if (!edit && !todo.isCompleted) {
              setEdit(!edit);
            }
          }}
        >
          <AiOutlineEdit />
        </div>
        <div className="delete" onClick={() => handleDelete(todo.id)}>
          <AiOutlineDelete />
        </div>
        <div className="done" onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </div>
      </div>
    </form>
  );
}

export default SingleTodo;
