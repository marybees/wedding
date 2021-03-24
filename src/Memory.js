import React from 'react';
import { Image, Row, Col, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ScubaPic from './scuba-diving.JPG';

function Memory() {

    return (
        <div style={{padding: '8rem 2rem 2rem 2rem', textAlign: 'center'}}>
            <h1 className='pageTitle'>Share <span>a</span> Memory</h1>
            <Row>
                <Col span={24} style={{ paddingBottom: '2rem'}}>
                    <Image
                    width={300}
                    src={ScubaPic}
                    />
                </Col>
            </Row>
            <h3 style={{ fontSize: '1.5rem'}}>Share your favorite memory with the bride and/or groom.</h3>
            <Button icon={ <UploadOutlined /> } type="primary" size="large" href='https://www.dropbox.com/request/shHIMmkHiTEFPg8FD73j'>
            Upload a photo or video
    </Button>
            <p style={{ paddingTop: '1rem' }}>for our wedding slideshow!</p>
        </div>
    )
}

export default Memory
