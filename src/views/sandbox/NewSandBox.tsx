import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/sandbox/SideMenu';
import TopHeader from '../../components/sandbox/TopHeader';

const NewSandBox = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout>
        <TopHeader></TopHeader>
        <Content className='layout-content'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default NewSandBox;
