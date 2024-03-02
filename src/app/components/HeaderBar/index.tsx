'use client';

import React from 'react';
import { useScroll } from 'ahooks';
import clsx from 'clsx';

interface HeaderBarProps {

}

const HeaderBar: React.FC<HeaderBarProps> = (props) => {
  const { top: pageScrollTop } = useScroll(document) ?? {};

  return(
    <header className={clsx(
      'flex items-center justify-between px-20 h-16 fixed left-0 right-0 duration-300',
      pageScrollTop && pageScrollTop > 20 && 'bg-white backdrop-filter backdrop-blur-md bg-opacity-50 shadow-sm'
    )}>
      <span>LOGO</span>
      <div className='flex items-center'>
        <div>右侧组件列表</div>
        <div className='ml-3'>用户头像区域</div>
      </div>
    </header>
  );
};

export default HeaderBar;
