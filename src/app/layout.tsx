import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import GlobalConfig from './GlobalConfig';
import './globals.css';

export const metadata: Metadata = {
  title: 'YZ导航',
  description: '最使用的导航站',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <GlobalConfig>{children}</GlobalConfig>
        </AntdRegistry>
      </body>
    </html>
  );
}
