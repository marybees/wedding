import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import House from './mary-and-will.JPEG';
import GoogleMap from './google-maps.png';

function App() {

  const GoogleMapIcon = () => (
    <img src={GoogleMap} alt="Google Maps icon" length='15' width='15' style={{ margin: '0 .5rem .2rem 0'}}></img>
  );

  return (
    <div>
      <Row>
        <Col span={24} align='center'>
            <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)`}} className='titleContainer'>
              <h1 className='title'>Mary <span>and</span> Will</h1>
            </div>
        </Col>
      </Row>
      <Row className='eventDetailsContainer' wrap={true}>
        <Col className='eventDetails' sm={16} md={8}>
        <h2>Welcome Clambake</h2>
          <p style={{ fontStyle: 'italic' }}>- for out of town guests -</p>
          <p className='date'>Friday, September 3, 2021</p>
          <a href='https://www.google.com/maps/place/20+Roos+Rd,+Mashpee,+MA+02649/@41.7477327,-70.4565802,17z/data=!4m13!1m7!3m6!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!2s20+Roos+Rd,+Mashpee,+MA+02649!3b1!8m2!3d41.7477327!4d-70.4543915!3m4!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!8m2!3d41.7477327!4d-70.4543915' target='blank'><p><GoogleMapIcon />20 Roos Road, East Sandwich, MA 02537</p></a>
          <p>5:00 PM</p>
        </Col>
        <Col className='eventDetails' sm={16} md={8}>
          <h2>Wedding</h2>
          <p className='date'>Saturday, September 4, 2021</p>
          <p style={{ fontStyle: 'italic' }}>- Formal Dress, Lawn Footwear -</p>
          <a href='https://www.google.com/maps/place/20+Roos+Rd,+Mashpee,+MA+02649/@41.7477327,-70.4565802,17z/data=!4m13!1m7!3m6!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!2s20+Roos+Rd,+Mashpee,+MA+02649!3b1!8m2!3d41.7477327!4d-70.4543915!3m4!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!8m2!3d41.7477327!4d-70.4543915' target='blank'><p><GoogleMapIcon />20 Roos Road, East Sandwich, MA 02537</p></a>
          <p>2:00 PM: Ceremony</p>
          <p>3:00 PM: Cocktail Hour</p>
          <p>5:00 PM: Dinner</p>
          <p>6:00 PM: Band</p>
          <p>9:00 - 10:00 PM: DJ</p>
        </Col>
        <Col className='eventDetails' sm={16} md={8}>
          <h2>Beach <span>and</span> Goodbyes</h2>
          <p className='date'>Sunday, September 5, 2021</p>
          <a href='https://www.google.com/maps/place/Sandy+Neck+Beach/@41.7389773,-70.3832071,17z/data=!3m1!4b1!4m5!3m4!1s0x89fb3577aac617a3:0xd50789a765c3e50d!8m2!3d41.7389773!4d-70.3810184' target='blank'><p><GoogleMapIcon />Sandy Neck Beach</p></a>
          <p>12:00 PM</p>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: '#E8DDCD'}} className='subtitle' span={12} align='center'>
          <Link to='/accommodation'><h2>Where <span>to</span> Stay</h2></Link>
          </Col>
        <Col style={{ backgroundColor: '#E3D9CA'}} className='subtitle' span={12} align='center'>
          <Link to='/directions'><h2>Getting There</h2></Link>
          </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: '#E9E2D7'}} className='subtitle' span={12} align='center'>
          <Link to='/our-story'><h2>Our Story</h2></Link>
        </Col>
        <Col style={{ backgroundColor: '#E7DED4'}} className='subtitle' span={12} align='center'>
          <Link to='/registry'><h2>Registry</h2></Link>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: '#E8DDCD'}} className='subtitle' span={12} align='center'>
          <Link to='/request-a-song'><h2>Request <span>a</span> Song</h2></Link>
        </Col>
        <Col style={{ backgroundColor: '#E3D9CA'}} className='subtitle' span={12} align='center'>
          <Link to='/share-a-memory'><h2>Share <span>a</span> Memory</h2></Link>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: '#E9E2D7'}} className='subtitle' span={12} align='center'>
          <Link to='/activities'><h2>Things <span>to</span> Do <span>on</span> Cape Cod</h2></Link>
        </Col>
        <Col style={{ backgroundColor: '#E7DED4'}} className='subtitle' span={12} align='center'>
            <Link to='/covid-19'><h2>COVID-19</h2></Link>
        </Col>
      </Row>
      <div style={{ backgroundImage: `url(${House})`}} className='bottomPhoto'></div>
    </div>
  );
}

export default App;
