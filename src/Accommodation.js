import React from 'react';
import { List, Avatar, Alert } from 'antd';

function Accommodation() {
    
    let listData = [
        {
            href: 'https://www.earlofsandwich.com/',
            title:'Earl of Sandwich Motel',
            avatar: 'https://cf.bstatic.com/images/hotel/max1024x768/377/37717905.jpg',
            description: '12 rooms blocked from Sept 3-6 (3-night minimum). Reserve by phone (508) 888-1415 and mention "Baker-Washburn Wedding"',
        },
        {
            href: 'https://www.sandyneck.com/',
            title:'Sandy Neck Motel',
            avatar: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_396,q_75,w_704/https://assets.simpleviewinc.com/simpleview/image/upload/crm/capecodma/Sandy-Neck-Motel-210-139ec70a5056b36_139ec848-5056-b365-ab262eb4e5fa9218.jpg',
            description: '6 rooms blocked from Sept 3-5. Reserve by phone (508) 362-3992 and mention "Baker-Washburn Wedding"',
        },
        {
            href: 'http://www.sandwichinnandsuites.com/',
            title:'Sandwich Inn & Suites',
            avatar: 'https://cf.bstatic.com/images/hotel/max1280x900/755/75557358.jpg',
            description: '5 rooms booked from Sept 3-5. Reserve by emailing mary@twentyroosroad.com with your room preference.',
        },
        {
            href: 'https://www.countryacresmotel.com/',
            title:'Country Acres Motel',
            avatar: 'https://capecodcanalmacoc.wliinc1.com/external/wcpages/wcwebcontent/webcontentpage.aspx?contentid=1638',
            description: '9 rooms blocked from Sept 3-5. Reserve by phone (888) 860-8650 and mention "Baker-Washburn Wedding"',
        },
        {
            href: 'https://www.danlwebsterinn.com/',
            title: "Dan'l Webster Inn & Spa",
            avatar: 'https://cf.bstatic.com/images/hotel/max1024x768/174/17442475.jpg',
            description: 'No Room Block. Reserve online and notify us by email at mary@twentyroosroad.com.',
        },
        {
            href: 'https://www.belfryinn.com/all-rooms/the-painted-lady',
            title:'The Painted Lady B&B',
            avatar: 'https://media-cdn.tripadvisor.com/media/photo-s/05/1d/66/89/belfry-inne-and-bistro.jpg',
            description: 'No Room Block. Reserve online and notify us by email at mary@twentyroosroad.com.',
        },
        {
            href: 'https://www.isaiahjones.com/?utm_source=google&utm_medium=GMB',
            title:'Isaiah Jones Homestead B&B',
            avatar: 'https://cf.bstatic.com/images/hotel/max1024x768/102/10257207.jpg',
            description: 'No Room Block. Reserve online and notify us by email at mary@twentyroosroad.com.',
        }
    ]

    return (
        <div style={{padding: '10rem 2rem 2rem 2rem'}}>
            <Alert
                message='Book Your Room ASAP'
                description='Due to the holiday weekend, hotels are booking up quickly. Please reserve your room at your earliest convenience.'            type="warning"
                style={{ marginBottom: '2rem'}}
                showIcon
                closable
            />
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 4,
                }}
                dataSource={listData}
                renderItem={item => (
                <List.Item
                    key={item.title}
                    extra={
                    <img
                        width={272}
                        alt="logo"
                        src={item.avatar}
                    />
                    }
                >
                    <List.Item.Meta
                    avatar={<Avatar src='' />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
                )}
            />,
        </div>
    )
}

export default Accommodation
