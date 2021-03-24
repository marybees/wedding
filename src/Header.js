import React from 'react';
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {

  return (
    <PageHeader
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: 'black',
      }}
      title={ <Link exact to='/'><h3 style={{ color: 'white' }}>The Wedding <span>at</span> Twenty Roos Road</h3></Link> }
      extra={
        <HamburgerMenu/>
      }
    ></PageHeader>
  );
};

export default Header;