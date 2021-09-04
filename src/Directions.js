import React from 'react';
import { Link } from "react-router-dom";
import MapCard from './MapCard';
import GoogleMap from './google-maps.png';

function Directions() {

    const GoogleMapIcon = () => (
        <img src={GoogleMap} alt="Google Maps icon" length='15' width='15' style={{ margin: '0 .5rem .2rem 0'}}></img>
    );

    return (
        <div style={{padding: '8rem 2rem 2rem 2rem'}}>
            <h1 className='pageTitle'>Getting There</h1>
            <MapCard />
            <div style={{ padding: ' 0 2rem 2rem 2rem'}}>
                <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
                    <h3 style={{ fontSize: '2rem' }}>Directions</h3>
                    <h3 style={{ fontSize: '1.5rem' }}>To Venue</h3>
                    <a href='https://www.google.com/maps/place/20+Roos+Rd,+Mashpee,+MA+02649/@41.7477327,-70.4565802,17z/data=!4m13!1m7!3m6!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!2s20+Roos+Rd,+Mashpee,+MA+02649!3b1!8m2!3d41.7477327!4d-70.4543915!3m4!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!8m2!3d41.7477327!4d-70.4543915' target='blank'><p><GoogleMapIcon />20 Roos Road, East Sandwich, MA 02537</p></a>
                    <p style={{ fontStyle: 'italic', fontSize: '.75rem' }}>*You may also see the town listed as Mashpee, 02649 on Google Maps.</p>
                    <h3 style={{ fontSize: '1.5rem' }}>To Cape Cod</h3>
                    <p><span className='bold'>By Car</span>: 1 hour from Boston, MA, 3.5 hours from Albany, NY & 4.5 hours from New York City.</p>
                    <p><span className='bold'>By Plane</span>: <a href="https://town.barnstable.ma.us/Airport/" target="_blank">Cape Cod Gateway Airport (HYA)</a>, with service from Boston and New York City Airports or <a href='https://www.massport.com/logan-airport/' target='_blank'>Boston Logan International Airport (BOS)</a>.</p>
                    <p><span className='bold'>By Train:</span> Amtrak to Boston South Station, <a href='https://capeflyer.com/' target='_blank'>CapeFLYER</a> to Hyannis (Runs through Sept 6 only).</p>
                    <p><span className='bold'>By Ferry:</span> For those looking for a scenic Cape roadtrip, the <a href='https://baystatecruisecompany.com/schedule-fares/' target='_blank'>Provincetown Ferry</a> from Boston to Provincetown is an excellent option to consider.</p>
                    <p><span className='bold'>Car Rentals:</span> <a href='https://www.carrentals.com/carsearch?dagv=1&subm=1&fdrp=0&rfrr=TG.LP.SrchWzd.Car&locn=Hyannis%2C+MA%2C+United+States+of+America+%28HYA-Barnstable+Municipal%29&loc2=Hyannis%2C+MA+%28HYA-Barnstable+Municipal%29&date1=09%2F03%2F2021&time1=1030AM&date2=09%2F05%2F2021&time2=1030AM&kind=1' target='blank'>Car rental</a> available at Hyannis Airport and Provincetown Airport.</p>
                </div>
                <div style= {{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem' }}>Parking</h3>
                    <p>School buses have been arranged to transport guests to the venue. Limited parking is also available at the venue if you prefer to drive.</p>
                </div>
            </div>
        </div>
    )
}

export default Directions
