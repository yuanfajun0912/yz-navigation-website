import { create } from 'zustand'

type State = {
  isLogin: Boolean
}

type Action = {
  updataIsLogin: (val: State['isLogin']) => void
}

export const userStore = create<State & Action>(set => ({
  isLogin: false,
  updataIsLogin: val => set(() => ({ isLogin: val }))
}))