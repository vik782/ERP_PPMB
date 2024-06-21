import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { calc } from 'antd/es/theme/internal';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const App: React.FC = () => {
  //const {
  //  token: { colorBgContainer, borderRadiusLG },
  //} = theme.useToken();

  return (
    <div
    style={{display:'block', position:'relative', height:'100vh'}}>
        <header 
        style={{background:'blue', display:'block', position:'relative', width:'100%', height:'64px'}}>
            this is top bar
        </header>
        <div
        className='body'
        style={{display:'flex', flexDirection:'row', position:'relative', height:'calc(100vh - 64px)'}}>
            <div
            className='sider'
            style={{background:'green', flexFlow:'column nowrap', display:'flex', position:'relative', maxWidth:'256px', minWidth:'256px', flexDirection:'column'}}>
                <div
                style={{background:'yellow', display:'block', flexGrow:'1'}}>
                    sider
                </div>

            </div>

            <div
            className='content'
            style={{background:'red', display:'flex', flexGrow:'1', flexDirection:'column'}}>
                <div
                className='breadcrumb top'
                style={{background:'blue', display:'block'}}>
                    breadcrumb top
                </div>
                <div
                className='actual content'
                style={{background:'green', display:'block', position:'relative', flexGrow:'1', overflowY:'auto'}}>
                    <div>
                        <div
                        style={{background:'red', height:'700px'}}>

                        </div>
                        LeftNav
                    </div>
                </div>


            </div>

        </div>


    </div>
  );
};

export default App;