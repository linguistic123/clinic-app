import React, { useState } from 'react';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import {ReactComponent as ClinicLogo} from './clinic-logo1.svg'
import MenuItem from 'antd/es/menu/MenuItem';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined }  from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const AppBar = (props) => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleSider = () => {
        setCollapsed((prev) => !prev);
    }
    return (
       <Layout className='layout'>
         <Sider theme='light' collapsible collapsed={collapsed} trigger={null} >
           <Menu mode='inline'>
             <MenuItem key='1' className='logo' icon={<span className='anticon'><ClinicLogo/></span>}>
              <span className='logo-text'>Dilshaad Clinic</span>
             </MenuItem>
             <MenuItem key='2' icon={<UserOutlined />}>
               Nav 1
             </MenuItem>
             <MenuItem key='3' icon={<UserOutlined />}>
               Nav 2
             </MenuItem>
           </Menu>
         </Sider>
         <Layout>
           <Header className='app-header'>
             {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                 className: 'trigger',
                 onClick: toggleSider,
             })}
           </Header>
           <Content className='site-layout-background' style={{
               margin: '24px 16px',
               padding:24,
           }}>
             {props.children}
           </Content>
         </Layout>
       </Layout>
    )
}
    

export default AppBar;
