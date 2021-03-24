import React from 'react';
import { List, Avatar, Alert } from 'antd';

function Activities() {

    let listData = [
        {
            href: "https://www.town.barnstable.ma.us/sandyneckpark/default.aspx",
            title:"Sandy Neck Beach Park",
            avatar: "https://previews.123rf.com/images/tonobalaguer/tonobalaguer1602/tonobalaguer160200060/51503834-cape-cod-sandy-neck-beach-in-barnstable-massachusetts-usa.jpg",
            description: "Thousands of years have allowed this barrier beach to develop into 4,700 acres of dunes, maritime forests, and marshes. It is a living museum, exhibiting dynamic landscapes rich with ecological activity and recreational opportunities.",
            content: "Each year thousands of visitors are attracted to Sandy Neck to soak up the sunshine, swim, and beach comb as they witness the power of the ocean."
        },
        {
            href: "http://www.sandwichglassmuseum.org/",
            title:"Sandwich Glass Museum",
            avatar: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_80,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/capecodma/12642840_1243206949027124_2953482930608228289_n_78f2cd1e-5056-b365-ab38c778f723d865.jpg",
            description: "The Sandwich Historical Society and its Glass Museum collects, preserves, and interprets the history of the Town of Sandwich, MA, the oldest town on Cape Cod. A large part of Sandwich history is involved with American glass production.",
            content: "The Sandwich Glass Museum has “Relit the Fires in Sandwich” with a glass furnace for hourly glass making presentations and new exhibits to better tell the story of the glass industry in Sandwich."
        },
        {
            href: "http://heritagemuseumsandgardens.org/",
            title:"Heritage Museum & Gardens",
            avatar: "https://www.isaiahjones.com/wp-content/uploads/Heritage-Gardens-Sandwich-MA.jpg",
            description: "Heritage Museums & Gardens offers 100 spectacular acres of trees and shrubs, designed gardens, exquisite flowers and sweeping lawns.",
            content: "Summer boasts brilliant hydrangeas and dazzling daylilies!"
        },
        {
            href: "https://www.tripadvisor.com/Attractions-g41802-Activities-Sandwich_Cape_Cod_Massachusetts.html",
            title:"TripAdvisor's List of Things to Do in Sandwich",
            avatar: "https://wikitravel.org/upload/shared//thumb/e/e0/SandwichDexterMill.jpg/350px-SandwichDexterMill.jpg",
            description: "Sandwich is the oldest town on the Cape, settled in 1637.",
            content: "Sandwich is famous for the glassware produced here in the 1800s. It is also home to numerous gift and antique stores, art galleries, and rare book stores."
        }
    ]

    return (
        <div style={{padding: '8rem 2rem 2rem 2rem'}}>
            <h1 className='pageTitle'>Things <span>to</span> Do <span>on</span> Cape Cod</h1>
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

export default Activities
