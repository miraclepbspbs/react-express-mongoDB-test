import React from 'react';
import { Layout } from 'antd';

import Router from '../Router';

const { Header, Footer, Content, Sider } = Layout;

const layoutPage = () => {
  return (
    <Layout>
      {/* <Header></Header> */}
      <Layout>
        {/* <Sider>left sidebar</Sider> */}
        <Content className='site-layout-content'>
          <Router />
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
};
export default layoutPage;
