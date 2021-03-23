import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';

const HamburgerMenu = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
            </Button>
            <Drawer
                title="Menu"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                style={{ fontFamily: 'Cinzel' }}
            >
                <p style={{ fontFamily: 'Cinzel' }}><Link exact to='/'>Home</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link to='/accommodations'>Where to Stay</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link to='/directions'>Getting There</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link to='/our-story'>Our Story</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link to='/registry'>Registry</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link to='/request-a-song'>Request a Song</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link to='/share-a-memory'>Share a Memory</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link to='/activities'>Things to Do</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link to='/covid-19'>COVID-19</Link></p>
            </Drawer>
        </div>
    );
};

export default HamburgerMenu;