import React from 'react';
import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {toDoState} from "../../store";

interface TodoFormData {
  todoInput: string
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState)
  const { register, handleSubmit, setValue } = useForm<TodoFormData>();

  const onValid = (data: TodoFormData) => {
    console.log(data);

    setToDos(oldToDos => [{ id: Date.now(), category: 'TO_DO', text: data.todoInput }, ...oldToDos])
    setValue('todoInput', '')
  }

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register('todoInput', { required: true })} placeholder="Write a To-Do"/>
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;