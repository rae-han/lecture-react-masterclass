import {atom} from "recoil";

export const isDarkAtom = atom({
  key: 'isDark',
  default: true, // 기본 값
})

export interface ToDo {
  id: number;
  text: string;
  category: 'DONE' | 'DOING' | "TO_DO"
}

export const toDoState = atom<ToDo[]>({
  key: 'toDo',
  default: [],
})