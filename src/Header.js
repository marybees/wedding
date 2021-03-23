import React from 'react';
import { PageHeader } from 'antd';
import Sider from './Sider';

const Header = () => {

  return (
    <PageHeader
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: 'black',
      }}
      title={ <h3 style={{ color: 'white' }}>The Wedding <span>at</span> Twenty Roos Road</h3> }
      extra={
        <Sider/>
      }
    ></PageHeader>
  );
};

export default Header;