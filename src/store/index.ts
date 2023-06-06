import {atom, selector} from "recoil";

export const isDarkAtom = atom({
  key: 'isDark',
  default: true, // 기본 값
})

type TCategories = 'DONE' | 'DOING' | 'TO_DO'

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface ToDo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: 'category',
  // default: 'TO_DO'
  default: Categories.TO_DO
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
    return [toDos.filter((toDo) => toDo.category === Categories.TO_DO), toDos.filter((toDo) => toDo.category === Categories.DOING), toDos.filter((toDo) => toDo.category === Categories.DONE)]
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