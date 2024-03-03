import React from 'react';
import { Space, Tooltip } from 'antd';
import { SearchOutlined, PicCenterOutlined, PicLeftOutlined, PicRightOutlined, ReadOutlined, EditOutlined } from '@ant-design/icons';
import DropDownItem from './DropDownItem';
import { publicIconClass } from '@/app/components/HeaderBar';

const cardTypeList = [
  {
    key: 'mini',
    icon: <PicCenterOutlined />,
    desc: '最简模式'
  },
  {
    key: 'normal',
    icon: <PicLeftOutlined />,
    desc: '正常模式'
  },
  {
    key: 'big',
    icon: <PicRightOutlined />,
    desc: '卡片模式'
  }
];

const editTypeList = [
  {
    key: 'read',
    icon: <ReadOutlined />,
    desc: '阅读模式'
  },
  {
    key: 'edit',
    icon: <EditOutlined />,
    desc: '编辑模式'
  }
];

export default function OperateList() {
  return (
    <Space size='large'>
      {/* TODO: 搜索逻辑 */}
      <Tooltip placement="bottomLeft" title='点击进入搜索模式'>
        <span className={publicIconClass}><SearchOutlined /></span>
      </Tooltip>
      <DropDownItem configKey='cardType' updateFuncKey='updataCardType' configList={cardTypeList} />
      <DropDownItem configKey='editType' updateFuncKey='updataEditType' configList={editTypeList} />
    </Space>
  );
}
