"use client";

import { userStore } from '@/store/index'

export default function Home() {
  const isLogin = userStore(state => state.isLogin)

  return (
    <div>
      isLogin::: {String(isLogin)}
    </div>
  );
}
