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
        <Row className='dayOf'>
            <Col style={{ backgroundColor: '#E8DDCD'}} className='subtitleDayOf' xs={24} lg={12} align='center'>
            <Link to='/shuttles'><h2>Shuttles</h2></Link>
            <CalendarOutlined />
            </Col>
            <Col style={{ backgroundColor: '#E3D9CA'}} className='subtitleDayOf' xs={24} lg={12} align='center'>
            <h2>Schedule</h2>
        <CalendarOutlined />
          <p style={{ marginTop: '2rem'}}>2:00 PM: Ceremony</p>
          <p>3:00 PM: Cocktail Hour(s)</p>
          <p>5:00 PM: Dinner</p>
          <p>6:00 PM: World Premier Band</p>
          <p>10:00 PM: The Lost Tapes Radio Show DJ Set featuring DJ KJG & DJ Wash</p>
            </Col>
        </Row>
        <Row className='dayOf'>
        <Col style={{ backgroundColor: '#E9E2D7'}} className='subtitleDayOf' xs={24} lg={12} align='center'>
        <a href='https://cocktailhour.vercel.app'><h2>Play <span>Cocktail Hour(s)</span></h2></a>
        <Link to='/home'><TrophyOutlined /></Link>
        <a href='https://cocktailhour.vercel.app/leaderboard'><h2>View the Leader Board</h2></a>

        </Col>
        <Col style={{ backgroundColor: '#E7DED4'}} className='subtitleDayOf' xs={24} lg={12} align='center'>
        <Link to='/seat'><h2>Find <span>Your</span> Seat</h2></Link>
        <Link to='/seat'><UserOutlined /></Link>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: '#E9E2D7'}} className='subtitleDayOf' span={24} align='center'>
            <h2>Share <span>the</span> Love</h2>
            <a href='https://www.instagram.com/explore/tags/willewemaryme/' target='blank'><InstagramOutlined /></a>
            <a style={{ marginTop: '1rem'}} href='https://www.instagram.com/explore/tags/willewemaryme/' target='blank'>#willewemaryme</a>
        </Col>
      </Row>
    </div>
  );
}

export default Dayof;


