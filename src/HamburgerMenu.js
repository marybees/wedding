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
                <p style={{ fontFamily: 'Cinzel' }}><Link onClick={onClose} exact to='/'>Home</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link onClick={onClose} to='/accommodations'>Where <span>to</span> Stay</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link onClick={onClose} to='/directions'>Getting There</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link onClick={onClose} to='/our-story'>Our Story</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link onClick={onClose} to='/registry'>Registry</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link onClick={onClose} to='/request-a-song'>Request <span>a</span> Song</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link onClick={onClose} to='/share-a-memory'>Share <span>a</span> Memory</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link onClick={onClose} to='/activities'>Things <span>to</span> Do</Link></p>
                <p style={{ fontFamily: 'Cinzel' }}><Link onClick={onClose} to='/covid-19'>COVID-19</Link></p>
            </Drawer>
        </div>
    );
};

export default HamburgerMenu;