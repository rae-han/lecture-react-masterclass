import {atom} from "recoil";

export const isDarkAtom = atom({
  key: 'isDark',
  default: true, // 기본 값
})