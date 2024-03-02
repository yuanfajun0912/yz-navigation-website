'use client';

import { userStore } from '@/app/store/index';
import client from '@/app/libs/database';

export default function Home() {
  const isLogin = userStore(state => state.isLogin);

  // client.navigation.findUnique({

  // })

  return (
    <div>
      isLogin::: {String(isLogin)}
    </div>
  );
}
