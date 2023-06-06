import React from 'react';
import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, toDoState} from "../../store";

interface TodoFormData {
  todoInput: string
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState)
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<TodoFormData>();

  const onValid = (data: TodoFormData) => {
    console.log(data);

    setToDos(oldToDos => [{ id: Date.now(), category, text: data.todoInput }, ...oldToDos])
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