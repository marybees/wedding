import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import MapCard from './MapCard';

function Directions() {
    return (
        <div style={{padding: '8rem 2rem 2rem 2rem'}}>
            <h1 className='pageTitle'>Getting There</h1>
            <MapCard />
            <div>
            <Row>
                <Col span={12}>
                    <h3 style={{ textAlign: 'center', fontSize: '2rem' }}>Directions</h3>
                    <h3>Venue</h3>
                    <p>20 Roos Road, East Sandwich, MA 02537</p>
                    <p style={{ fontStyle: 'italic', fontSize: '.75rem' }}>*You may also see the town listed as Mashpee, 02649 on Google Maps.</p>
                    <h3>Cape Cod</h3>
                    <p><a href='https://goo.gl/maps/t1xypZ83eU6fuJhb8'><span className='bold'>By Car</span>: 1 hour from Boston, MA, 3.5 hours from Albany, NY & 4.5 hours from New York City. </a></p>
                    <p><span className='bold'>By Plane</span>: <a href='https://town.barnstable.ma.us/Airport/'>Cape Cod Gateway Airport (HYA)</a>, with service from Boston and New York City Airports or <a href='https://www.massport.com/logan-airport/'>Boston Logan International Airport (BOS)</a>.</p>
                    <p><span className='bold'>By Train:</span></p>
                </Col>
                <Col span={12}>
                    <h3 style={{ textAlign: 'center', fontSize: '2rem' }}>Parking</h3>
                    <p><span className='bold'>Please note that there will be no parking spaces available at the wedding or clambake.</span> Shuttles have been arranged to transport guests to the venue. Details will be updated here as the wedding date approaches and you will also be informed when you check into your hotel.</p>
                    <p>If you're not staying at a hotel listed on the <Link to='/accommodations'>Where to Stay</Link> page, you will be responsible for getting an Uber/Lyft/Taxi. Please account for heavy Labor Day traffic and plan accordingly.</p>
                    <p>For those with impaired mobility, please arrange special transportation with us by August 1st at <a href = "mailto: mary@twentyroosroad.com">mary@twentyroosroad.com</a>.</p>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default Directions
