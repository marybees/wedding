import React from 'react';
import { Link } from "react-router-dom";
import MapCard from './MapCard';

function Directions() {
    return (
        <div style={{padding: '8rem 2rem 2rem 2rem'}}>
            <h1 className='pageTitle'>Getting There</h1>
            <MapCard />
            <div style={{ padding: ' 0 2rem 2rem 2rem'}}>
                <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
                    <h3 style={{ fontSize: '2rem' }}>Directions</h3>
                    <h3 style={{ fontSize: '1.5rem' }}>To Venue</h3>
                    <p>20 Roos Road, East Sandwich, MA 02537</p>
                    <p style={{ fontStyle: 'italic', fontSize: '.75rem' }}>*You may also see the town listed as Mashpee, 02649 on Google Maps.</p>
                    <h3 style={{ fontSize: '1.5rem' }}>To Cape Cod</h3>
                    <p><a href='https://goo.gl/maps/t1xypZ83eU6fuJhb8' target='_blank'><span className='bold'>By Car</span>: 1 hour from Boston, MA, 3.5 hours from Albany, NY & 4.5 hours from New York City. </a></p>
                    <p><span className='bold'>By Plane</span>: <a href='https://town.barnstable.ma.us/Airport/' target='_blank'>Cape Cod Gateway Airport (HYA)</a>, with service from Boston and New York City Airports or <a href='https://www.massport.com/logan-airport/'>Boston Logan International Airport (BOS)</a>.</p>
                    <p><span className='bold'>By Train:</span> Amtrak to Boston South Station, <a href='https://capeflyer.com/' target='_blank'>CapeFLYER</a> to Hyannis (Runs through Sept 6 only).</p>
                    <p><span className='bold'>Car Rentals:</span> <a href='https://www.carrentals.com/carsearch?dagv=1&subm=1&fdrp=0&rfrr=TG.LP.SrchWzd.Car&locn=Hyannis%2C+MA%2C+United+States+of+America+%28HYA-Barnstable+Municipal%29&loc2=Hyannis%2C+MA+%28HYA-Barnstable+Municipal%29&date1=09%2F03%2F2021&time1=1030AM&date2=09%2F05%2F2021&time2=1030AM&kind=1' target='_blank'>Car rental</a> available at Hyannis Airport.</p>
                </div>
                <div style= {{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem' }}>Parking</h3>
                    <p style={{ fontWeight: 'bold' }}>Please note that there will be no parking spaces available at the wedding or clambake.</p>
                    <p>Shuttles have been arranged to transport guests to the venue. Details will be updated here as the wedding date approaches and you will also be informed when you check into your hotel.</p>
                    <p>If you're not staying at a hotel listed on the <Link to='/accommodations'>Where to Stay</Link> page, you will be responsible for getting an Uber/Lyft/Taxi. Please account for heavy Labor Day traffic and plan accordingly.</p>
                    <p>For those with impaired mobility, please arrange special transportation with us by August 1st at <a href = "mailto: mary@twentyroosroad.com">mary@twentyroosroad.com</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Directions
