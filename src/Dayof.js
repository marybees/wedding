import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import {
    UserOutlined,
    TrophyOutlined,
    CalendarOutlined,
    InstagramOutlined,
  } from '@ant-design/icons';

function Dayof() {

  return (
    <div style={{paddingTop: '8rem'}}>
        <h1 className='pageTitle'>Welcome <span>to</span> Our Wedding</h1>
        <Row>
            <Col style={{ backgroundColor: '#E8DDCD'}} className='subtitleDayOf' span={12} align='center'>
            <Link to='/home'><h2>Play <span>Cocktail Hour(s)</span></h2></Link>
            <Link to='/home'><TrophyOutlined /></Link>
            </Col>
            <Col style={{ backgroundColor: '#E3D9CA'}} className='subtitleDayOf' span={12} align='center'>
            <Link to='/seats'><h2>Find <span>Your</span> Seat</h2></Link>
            <Link to='/seats'><UserOutlined /></Link>
            </Col>
        </Row>
        <Row>
        <Col style={{ backgroundColor: '#E9E2D7'}} className='subtitleDayOf' span={12} align='center'>
          <h2>Share <span>the</span> Love</h2>
          <a href='https://www.instagram.com/explore/tags/willewemaryme/' target='blank'><InstagramOutlined /></a>
          <a style={{ marginTop: '1rem'}} href='https://www.instagram.com/explore/tags/willewemaryme/' target='blank'>#willewemaryme</a>
        </Col>
        <Col style={{ backgroundColor: '#E7DED4'}} className='subtitleDayOf' span={12} align='center'>
        <h2>Schedule</h2>
        <CalendarOutlined />
          <p style={{ marginTop: '2rem'}}>2:00 PM: Ceremony</p>
          <p>3:00 PM: Cocktail Hour(s)</p>
          <p>5:00 PM: Dinner</p>
          <p>6:00 PM: World Premier Band</p>
          <p>10:00 PM: The Lost Tapes Radio Show DJ Set featuring DJ KJG & DJ Wash</p>
        </Col>
      </Row>
    </div>
  );
}

export default Dayof;


