'use client';

import React from 'react';
import { useScroll } from 'ahooks';
import clsx from 'clsx';
import OperateList from './OperateList';
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface HeaderBarProps {

}

export const publicIconClass = 'text-xl text-slate-800 hover:text-sky-500 cursor-pointer';

const HeaderBar: React.FC<HeaderBarProps> = (props) => {
  const { top: pageScrollTop } = useScroll(document) ?? {};

  return(
    <header className={clsx(
      'flex items-center justify-between px-14 h-16 fixed left-0 right-0 duration-300',
      pageScrollTop && pageScrollTop > 20 && 'bg-white backdrop-filter backdrop-blur-md bg-opacity-50 shadow-sm'
    )}>
      <span>LOGO</span>
      <Space size='large' align='start'>
        <OperateList />
        <div className='border-l pl-5 border-slate-200'><Avatar size={28} icon={<UserOutlined />} /></div>
      </Space>
    </header>
  );
};

export default HeaderBar;
