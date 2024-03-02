// import { userStore } from '@/app/store/index';
// import client from '@/app/libs/database';
import HeaderBar from './components/HeaderBar';
import SlideBar from './components/SlideBar';
import Main from './components/Main';
import Footer from './components/Footer';


export default function Home() {
  // const isLogin = userStore(state => state.isLogin);
  // client.navigation.findUnique({

  // });

  return (
    // style={{ backgroundImage: '' }}
    <div className='min-h-screen flex flex-col justify-between bg-image'>
      <HeaderBar></HeaderBar>
      <div className='flex justify-between mt-16'>
        <SlideBar></SlideBar>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
}
