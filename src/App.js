import './index.less'
import { Row, Col, Card } from 'antd';

function App() {

  return (
    <div>
      <Row>
        <Col span={24} align='center'>
          <Card>
            <div className='titleContainer'>
              <h1 className='title'>Mary <span>and</span> Will</h1>
            </div>
          </Card>
        </Col>
      </Row>
      <Card bordered={false}>
      <Row>
        <Card.Grid className='eventDetails' span={8} align='center' hoverable={false} bordered={false}>
        <h2>Welcome Clambake</h2>
          <p style={{ fontStyle: 'italic' }}>for out of town guests</p>
          <p className='date'>Friday, September 3, 2021</p>
          <a href='https://www.google.com/maps/place/20+Roos+Rd,+Mashpee,+MA+02649/@41.7477327,-70.4565802,17z/data=!4m13!1m7!3m6!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!2s20+Roos+Rd,+Mashpee,+MA+02649!3b1!8m2!3d41.7477327!4d-70.4543915!3m4!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!8m2!3d41.7477327!4d-70.4543915' target='blank'><p>20 Roos Road, East Sandwich, MA 02537</p></a>
          <p>5:00 PM</p>
        </Card.Grid>
        <Card.Grid className='eventDetails' span={8} align='center' hoverable={false} bordered={false}>
          <h2>Wedding</h2>
          <p className='date'>Saturday, September 4, 2021</p>
          <a href='https://www.google.com/maps/place/20+Roos+Rd,+Mashpee,+MA+02649/@41.7477327,-70.4565802,17z/data=!4m13!1m7!3m6!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!2s20+Roos+Rd,+Mashpee,+MA+02649!3b1!8m2!3d41.7477327!4d-70.4543915!3m4!1s0x89e4cb21dd21f7b9:0x72a40c7a07b75002!8m2!3d41.7477327!4d-70.4543915' target='blank'><p>20 Roos Road, East Sandwich, MA 02537</p></a>
          <p>2:00 PM: Ceremony</p>
          <p>3:00 PM: Cocktail Hour</p>
          <p>5:00 PM: Dinner</p>
          <p>6:00 PM: Band</p>
          <p>9:00 - 11:00 PM: DJ</p>
        </Card.Grid>
        <Card.Grid className='eventDetails' span={8} align='center' hoverable={false} bordered={false}>
          <h2>Beach <span>and</span> Goodbyes</h2>
          <p className='date'>Sunday, September 5, 2021</p>
          <a href='https://www.google.com/maps/place/Sandy+Neck+Beach/@41.7389773,-70.3832071,17z/data=!3m1!4b1!4m5!3m4!1s0x89fb3577aac617a3:0xd50789a765c3e50d!8m2!3d41.7389773!4d-70.3810184' target='blank'><p>Sandy Neck Beach</p></a>
          <p>12:00 PM</p>
        </Card.Grid>
      </Row>
      </Card>
      <Row>
        <Col className='subtitle' span={12} align='center'>
          <h2>Where <span>to</span> Stay</h2>
          </Col>
        <Col className='subtitle' span={12} align='center'>
          <h2>Getting There</h2>
          </Col>
      </Row>
      <Row>
        <Col className='subtitle' span={12} align='center'>
          <h2>Our Story</h2>
        </Col>
        <Col className='subtitle' span={12} align='center'>
          <h2>Registry</h2>
        </Col>
      </Row>
      <Row>
        <Col className='subtitle' span={12} align='center'>
          <h2>Request <span>a</span> Song</h2>
        </Col>
        <Col className='subtitle' span={12} align='center'>
          <h2>Share <span>a</span> Memory</h2>
        </Col>
      </Row>
      <Row>
        <Col className='subtitle' span={12} align='center'>
          <h2>Things <span>to</span> Do <span>on</span> Cape Cod</h2>
        </Col>
        <Col className='subtitle' span={12} align='center'>
            <h2>COVID-19</h2>
        </Col>
      </Row>
    </div>
  );
}

export default App;
