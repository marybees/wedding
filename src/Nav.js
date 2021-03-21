import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'antd';

const Nav = () => {

  return (
    <PageHeader
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: '#ff914d',
      }}
      title={
        <Link to="/">
          <img
            src={}
            alt="Mary and Will's house"
            width="200"
          ></img>
        </Link>
      }
      extra={[
          Mary and Will
      ]}
    ></PageHeader>
  );
};

export default Nav;