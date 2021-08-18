import React from 'react';
import { List, Avatar, Alert } from 'antd';

function Food() {

    let listData = [
        {
            href: "https://www.offthegridcapecod.com/",
            title:"Off the Grid BBQ",
            avatar: "https://images.squarespace-cdn.com/content/v1/5ebc4688f38e1c08aa7dd6bf/1589823173967-Z28QIF9YW3N609AL7U5E/IMG_6540.CR2.jpeg?format=1500w",
            description: "Casual, dog-friendly BBQ joint, with outdoor seating and live music.",
            content: "Close to Sandwich Resort & Spa."
        },
        {
            href: "https://www.seafoodsams.com/sandwich",
            title:"Seafood Sam's",
            avatar: "https://media-cdn.tripadvisor.com/media/photo-s/02/b4/51/4e/seafood-sam-s-on-the.jpg",
            description: "Casual, dog-friendly seafood spot, with outdoor seating and local fare.",
            content: "Close to Sandwich Resort & Spa."
        },
        {
            href: "https://www.facebook.com/Shipwreck-Ice-Cream-294988863863859/",
            title:"Shipwreck Ice Cream",
            avatar: "https://fastly.4sqi.net/img/general/600x600/2251475_B4z9D3cYcF_5GRRkK1n-fQ7DZfA5aKK05pdTBNXViTk.jpg",
            description: "Huge selection of ice creams with fun outdoor seating. Dog-friendly and open late!",
            content: "Close to Sandwich Resort & Spa"
        },
        {
            href: "http://bethsbakery.net/",
            title:"Beth's Bakery",
            avatar: "http://bethsbakery.net/wp-content/uploads/2020/06/bb-web-1.jpg",
            description: "Great breakfast and lunch spot in Sandwich's historic old town, with outdoor seating options.",
            content: "Only open 8 AM - 3 PM most days."
        },
        {
            href: "https://riverviewschool.org/programs/post-high-school-transition-program/vocational/cafe-riverview",
            title:"Cafe Riverview",
            avatar: "https://boston.cbslocal.com/wp-content/uploads/sites/3859903/2016/05/cafe-riverview-1.jpg?w=420",
            description: "Great breakfast spot and a good cause!",
            content: "Close to Earl of Sandwich and Sandy Neck Motels."
        },
        {
            href: "https://www.cafechew.com/",
            title:"Cafe Chew",
            avatar: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_80,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/capecodma/outside-patio1-aa7f7d065056b36_aa7f7e5a-5056-b365-abc44f79de865cab.jpg",
            description: "Best sandwich in Sandwich, hands down. Outdoor seating options available.",
            content: "Close to Sandwich Resort & Spa."
        },
        {
            href: "https://www.socoffee.co/sandwich",
            title:"Snowy Owl Coffee Roasters",
            avatar: "https://images.squarespace-cdn.com/content/v1/557e1aa2e4b069fd29c25360/1626725885862-JNPUZT6TM8G5GW3152QQ/351047D1-771C-4F6F-B2A4-CD787CF58CF0.jpeg?format=750w",
            description: "New coffee place in town. Limited outdoor seating and food.",
            content: "Best on-the-go."
        },
        {
            href: "http://www.gotofathers.com/",
            title:"Father's Kitchen & Taphouse",
            avatar: "https://www.visitingnewengland.com/PageMill_Resources/fathers-sign.jpg",
            description: "Casual dinner spot with outdoor seating. Classic pub food and lots of beer on tap.",
            content: "Close to Earl of Sandwich and Sandy Neck Motels."
        },
        {
            href: "https://www.fishermensview.com/",
            title:"Fisherman's View",
            avatar: "https://bloximages.chicago2.vip.townnews.com/capenews.net/content/tncms/assets/v3/editorial/a/33/a33ca814-a75c-57bb-b5c5-ab1110ddeae3/57ace2020b574.image.jpg?resize=1200%2C800",
            description: "Sit down seafood dinner restaurant, with a view of Sandwich Marina. Reservations recommended.",
            content: "Close to Sandwich Resort & Spa."
        },
    ]

    return (
        <div style={{padding: '8rem 2rem 2rem 2rem'}}>
            <h1 className='pageTitle'>Our <span>Fav</span> Local <span>Food</span> Spots</h1>
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
                    avatar={<Avatar src='https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />}
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

export default Food
