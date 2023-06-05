import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {ToDo, toDoState} from "../../store";

const ToDoItem = ({ text }: ToDo) => {
  return <li>
    <span>{text}</span>
    <button>To Do</button>
    <button>DONE</button>
    <button>DOING</button>
  </li>
}

const ToDoList = () => {
  const toDos = useRecoilValue<ToDo[]>(toDoState)

  return (
    <ul>
      {toDos.map(toDo => <ToDoItem key={toDo.id} {...toDo} />)}
    </ul>
  );
};

export default ToDoList;