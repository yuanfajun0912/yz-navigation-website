import { create } from 'zustand';

// 卡片展示类型
export type CardType = 'mini' | 'normal' | 'big'
// 编辑状态
export type EditType = 'read' | 'edit'

export type State = {
  cardType: CardType
  editType: EditType
}

export type Action = {
  updataCardType: (val: State['cardType']) => void
  updataEditType: (val: State['editType']) => void
}

export const configStore = create<State & Action>(set => ({
  cardType: 'normal',
  editType: 'read',
  updataCardType: val => set(() => ({ cardType: val })),
  updataEditType: val => set(() => ({ editType: val }))
}));