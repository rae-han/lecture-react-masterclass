import {atom, selector} from "recoil";

export const isDarkAtom = atom({
  key: 'isDark',
  default: true, // 기본 값
})

export interface ToDo {
  id: number;
  text: string;
  category: 'DONE' | 'DOING' | "TO_DO"
}

export const categoryState = atom({
  key: 'category',
  default: 'TO_DO'
})

export const toDoState = atom<ToDo[]>({
  key: 'toDo',
  default: [],
})

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({get}) => {
    const toDos = get(toDoState)
    console.log(123123, toDos)
    // return toDos.length
    return [toDos.filter((toDo) => toDo.category === 'TO_DO'), toDos.filter((toDo) => toDo.category === 'DOING'), toDos.filter((toDo) => toDo.category === 'DONE')]
  }
})

export const toDoSelectorWithCategory = selector({
  key: 'toDoSelectorWithCategory',
  get: ({get}) => {
    const toDos = get(toDoState)
    const category = get(categoryState)
    // return toDos.length
    return toDos.filter((toDo) => toDo.category === category)
  }
})