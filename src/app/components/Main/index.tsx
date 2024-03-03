import React from 'react';
import client from '@/app/libs/database';

async function getCollectList (type: number) {
  const list = await client.navigation.findMany({
    where: {
      type
    }
  });
  return list;
}

export default async function Main() {
  // TODO: 获取type为1的列表
  const list = await getCollectList(1);
  console.log('list::', list);

  return (
    <div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
      <div className='h-20'>main!!!!</div>
    </div>
  );
}
