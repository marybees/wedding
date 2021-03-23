import React from 'react';
import { List, Avatar, Alert } from 'antd';

function Accommodation() {
    
    let listData = [
        {
            href: 'https://www.earlofsandwich.com/',
            title:'Earl of Sandwich Motel',
            avatar: 'https://cf.bstatic.com/images/hotel/max1024x768/377/37717905.jpg',
            description: "Great option for families, couples and singles. 4-minute drive to our home. Rates start at $99/night. Shuttle transportation provided to/from the wedding.",
            content: '12 rooms blocked from Sept 3-6 (Fri-Mon, 3-night minimum). Reserve by phone (508) 888-1415 and mention "Baker-Washburn Wedding".'
        },
        {
            href: 'https://www.sandyneck.com/',
            title:'Sandy Neck Motel',
            avatar: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_396,q_75,w_704/https://assets.simpleviewinc.com/simpleview/image/upload/crm/capecodma/Sandy-Neck-Motel-210-139ec70a5056b36_139ec848-5056-b365-ab262eb4e5fa9218.jpg',
            description: "Great option for families, couples and singles. 6-minute drive to our home. Rates start at $170/night. Shuttle transportation provided to/from the wedding.",
            content: '4 rooms blocked from Sept 3-5 (Fri-Sun) and 2 rooms blocked Sept 4-5 (Sat-Sun), including an efficiency suite perfect for guests with children. Reserve by phone (508) 362-3992 and mention "Baker-Washburn Wedding".',
        },
        {
            href: 'http://www.sandwichinnandsuites.com/',
            title:'Sandwich Inn & Suites',
            avatar: 'https://cf.bstatic.com/images/hotel/max1280x900/755/75557358.jpg',
            description: "Great option for families, couples and singles. 8-minute drive to our home. Rates start at $164/night. Shuttle transportation provided to/from the wedding.",
            content: '5 rooms booked for the wedding from Sept 3-5 (Fri-Sun), including 1 queen, 1 double, 1 king, and 2 studios perfect for guests with children. Reserve by emailing mary@twentyroosroad.com with your room preference.',
        },
        {
            href: 'https://www.countryacresmotel.com/',
            title:'Country Acres Motel',
            avatar: 'https://capecodcanalmacoc.wliinc1.com/external/wcpages/wcwebcontent/webcontentpage.aspx?contentid=1638',
            description: "Great option for families, couples and singles. 4-minute drive to our home. Rates start at $140/night. Shuttle transportation provided to/from the wedding.",
            content: '9 rooms blocked from Sept 3-5 (Fri-Sun), including a deluxe double guest room, perfect for guests with children. Reserve by phone (888) 860-8650 and mention "Baker-Washburn Wedding".',
        },
        {
            href: 'https://www.danlwebsterinn.com/',
            title: "Dan'l Webster Inn & Spa",
            avatar: 'https://cf.bstatic.com/images/hotel/max1024x768/174/17442475.jpg',
            description: "Great option for singles and couples. 7-minute drive to our home. Rates start at $299/night. Shuttle transportation provided to/from the wedding.",
            content: 'No Room Block. Reserve online and notify us by email at mary@twentyroosroad.com to ensure your shuttle transportation is arranged.',
        },
        {
            href: 'https://www.belfryinn.com/all-rooms/the-painted-lady',
            title:'The Painted Lady B&B',
            avatar: 'https://media-cdn.tripadvisor.com/media/photo-s/05/1d/66/89/belfry-inne-and-bistro.jpg',
            description: "Great option for singles and couples. 6-minute drive to our home. Rates start at $189/night. Shuttle transportation provided to/from the wedding.",
            content: 'No Room Block. Reserve online and notify us by email at mary@twentyroosroad.com to ensure your shuttle transportation is arranged.',
        },
        {
            href: 'https://www.isaiahjones.com/?utm_source=google&utm_medium=GMB',
            title:'Isaiah Jones Homestead B&B',
            avatar: 'https://cf.bstatic.com/images/hotel/max1024x768/102/10257207.jpg',
            description: "Great option for singles and couples. 6-minute drive to our home. Rates start at $217/night. Shuttle transportation provided to/from the wedding.",
            content: 'No Room Block. Reserve online and notify us by email at mary@twentyroosroad.com to ensure your shuttle transportation is arranged.',
        },
        {
            href: 'https://www.beachrealtycapecod.com/',
            title:'House Rentals on Springhill and East Sandwich Beaches',
            avatar: 'https://usm-feed-ccaimls.s3.amazonaws.com/35391b6b5948723e27e10d5a21d244d8-1-.jpg?1549986015',
            description: "Great option for families looking to stay longer. House rentals with Beach Realty are from Saturday to Saturday. Some rentals are within walking distance to our home.",
            content: 'Very few rentals available. Call (508) 233-2102 to learn more about your options. Shuttle transportation will not be provided, so an Uber/Lyft/Taxi to the wedding will be required.',
        }
    ]

    return (
        <div style={{padding: '8rem 2rem 2rem 2rem'}}>
            <Alert
                message='Book Your Room ASAP'
                description="It would be a total bummer if you couldn't make it to our wedding because you forgot to book your room! Cape Cod is a popular vacation destination and due to the holiday weekend, hotels are booking up quickly. Please reserve your room at your earliest convenience!"            type="warning"
                style={{ marginBottom: '2rem'}}
                showIcon
                closable
            />
            <h1 className='pageTitle'>Where <span>to</span> Stay</h1>
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
                    avatar={<Avatar src='https://34t9wx3d3efh36333w49fxon-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/iStock-586054802-e1511279103860.jpg' />}
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
