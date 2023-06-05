import React, {MouseEventHandler} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {ToDo, toDoState} from "../../store";

const ToDoItem = ({ text, category, id }: ToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (newCategory: ToDo['category']) => {
    console.log(newCategory)
    onCommon(newCategory)
  }

  const onClickWithName: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget.name);
    let name = e.currentTarget.name as any;

    console.log(name)

    setToDos(prev => {
      const targetIndex = prev.findIndex(item => item.id === id);
      console.log(targetIndex)
      const prevItem = prev[targetIndex];
      const nextItem = { id, text, category: name }
      const frontToDos = prev.slice(0, targetIndex);
      const backToDos = prev.slice(targetIndex + 1);
      console.log({ prevItem, nextItem })
      console.log({ frontToDos, backToDos })
      const next = [...frontToDos, nextItem, ...backToDos];
      // return prev;
      return next;
    })
  }

  const onCommon = (nextCategory: ToDo['category']) => {
    setToDos(prev => {
      const targetIndex = prev.findIndex(item => item.id === id);
      console.log(targetIndex)
      return prev;
    })
  }

  return <li>
    <span>{text}</span>
    {/*{category !== 'TO_DO' && <button onClick={() => onClick('TO_DO')}>To Do</button>}*/}
    {/*{category !== 'DONE' && <button onClick={() => onClick('DONE')}>DONE</button>}*/}
    {/*{category !== 'DOING' && <button onClick={() => onClick('DOING')}>DOING</button>}*/}
    {category !== 'TO_DO' && <button name="TO_DO" onClick={onClickWithName}>To Do</button>}
    {category !== 'DONE' && <button name="DONE" onClick={onClickWithName}>DONE</button>}
    {category !== 'DOING' && <button name="DOING" onClick={onClickWithName}>DOING</button>}
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