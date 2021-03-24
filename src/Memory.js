import React from 'react';
import { Image, Row, Col, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function Memory() {

    return (
        <div style={{padding: '8rem 2rem 2rem 2rem', textAlign: 'center'}}>
            <h1 className='pageTitle'>Share <span>a</span> Memory</h1>
            <Row>
                <Col span={24} style={{ paddingBottom: '2rem'}}>
                    <Image
                    width={300}
                    src='../public/scuba-diving.JPG'
                    />
                </Col>
            </Row>
            <h3 style={{ fontSize: '1.5rem'}}>Share your favorite memory with the bride and/or groom.</h3>
            <button style={{ border: 'none', backgroundColor: 'black', padding: '.5rem'}}><a style={{ color: 'white' }} href='https://www.dropbox.com/request/shHIMmkHiTEFPg8FD73j' target='_blank'>
                <UploadOutlined /> Upload a photo or video
            </a></button>
            <p style={{ paddingTop: '1rem' }}>for our wedding slideshow!</p>
        </div>
    )
}

export default Memory
