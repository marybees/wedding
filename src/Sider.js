import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sider = () => {

    const [openKeys, setOpenKeys] = useState([]);

    const rootSubmenuKeys = ['sub1', 'sub2'];

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 200 }}>
        <SubMenu style={{ fontFamily: 'Cinzel' }} key="sub1" icon={<MenuOutlined />}>
            <Menu.Item key="1"><Link exact to='/'>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/accommodations'>Where to Stay</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/directions'>Getting There</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/our-story'>Our Story</Link></Menu.Item>
            <Menu.Item key="5"><Link to='/registry'>Registry</Link></Menu.Item>
            <Menu.Item key="6"><Link to='/request-a-song'>Request a Song</Link></Menu.Item>
            <Menu.Item key="7"><Link to='/share-a-memory'>Share a Memory</Link></Menu.Item>
            <Menu.Item key="8"><Link to='/activities'>Things to Do</Link></Menu.Item>
            <Menu.Item key="9"><Link to='/covid-19'>COVID-19</Link></Menu.Item>
        </SubMenu>
    </Menu>
    );
};

export default Sider;
