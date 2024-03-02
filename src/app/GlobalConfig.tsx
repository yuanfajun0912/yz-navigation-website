'use client';

import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider, theme } from 'antd';
import { PropsWithChildren } from 'react';

export default function GlobalConfig ({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
      // 暗黑切换
        algorithm: theme.defaultAlgorithm,
      // algorithm: theme.darkAlgorithm,
      }}
    >
      { children }
    </ConfigProvider>
  );
}