import {ChangeEventHandler, FormEventHandler, useState} from "react";
import {useForm} from "react-hook-form";
import {atom, RecoilState, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

interface TodoFormData {
  todoInput: string
}

// const useRecoil = (key: RecoilState<T>) => {
  // const value = useRecoilValue(key);
  // const setValue = useSetRecoilState(key);

  // return [value, setValue]
// }

const TodoPage = () => {
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState)
  // const [toDos, setToDos] = useRecoilState(toDoState);
  // const { register, handleSubmit, setValue } = useForm<TodoFormData>();

  return (
    <div>
      <h1>Todo List</h1>
      <CreateToDo />
      <ToDoList />
    </div>
  );
}

export default TodoPage;