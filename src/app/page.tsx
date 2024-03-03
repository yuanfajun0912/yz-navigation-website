// import { userStore } from '@/app/store/index';
// import client from '@/app/libs/database';
import HeaderBar from './components/HeaderBar';
import SlideBar from './components/SlideBar';
import Main from './components/Main';
import Footer from './components/Footer';
import client from '@/app/libs/database';

/**
 * type: 1 前端框架 2 组件库工具库 3 工程化
 */

async function createRecord () {
  await client.navigation.create({
    data: {
      name: 'ahooks',
      desc: 'react hook库，提供了很多useScroll、useLockFn这样的很常用的工具库',
      address: 'https://ahooks.js.org/zh-CN/hooks/use-lock-fn',
      type: 2,
      extraJson: '',
      createTime: new Date(),
      updateTime: new Date()
    }
  });
}

export default function Home() {
  // TODO:
  // createRecord();

  return (
    // style={{ backgroundImage: '' }}
    <div className='min-h-screen flex flex-col justify-between bg-image'>
      <HeaderBar />
      <div className='flex justify-between mt-16'>
        <SlideBar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
