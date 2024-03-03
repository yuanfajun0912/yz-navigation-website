import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { State, Action, configStore } from '@/app/store';
import { publicIconClass } from '@/app/components/HeaderBar';

interface ConfigList {
  key: string
  icon: any
  desc: string
}

interface DropDownProps {
  configKey: keyof State
  updateFuncKey: keyof Action
  configList: ConfigList[]
}

const DropDownItem: React.FC<DropDownProps> = ({
  configKey,
  updateFuncKey,
  configList
}) => {
  const valType = configStore(state => state[configKey]);
  const updateVal = configStore(state => state[updateFuncKey]);
  const items: MenuProps['items'] = configList.map(_ => ({
    key: _.key,
    label: (
      <div onClick={() => updateVal(_.key)}>
        {_.icon}<span className='ml-1'>{_.desc}</span>
      </div>
    )
  }));
  const menuItems = items?.filter(_ => _?.key !== valType);
  const getActiveItem = (key: string) => {
    const Icon = configList?.find(_ => _.key === key)?.icon;
    return <span className={publicIconClass}>{Icon}</span>;
  };

  return(
    <Dropdown menu={{ items: menuItems }} placement="bottomLeft">
      { getActiveItem(valType) }
    </Dropdown>
  );
};

export default DropDownItem;
