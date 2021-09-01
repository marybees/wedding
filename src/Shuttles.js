import { Row, Col } from 'antd';

function Shuttles() {

  return (
    <div style={{paddingTop: '8rem'}}>
        <h1 className='pageTitle'>Shuttle Schedules</h1>
        <Row className='dayOf'>
            <Col style={{ backgroundColor: '#E8DDCD'}} className='subtitleDayOf' xs={24} lg={12} align='center'>
                <h2>Clambake: Friday, September 3rd</h2>
                    <p style={{ marginTop: '2rem'}}>4:00 PM: Sandwich Lodge & Resort</p>
                    <p>Next stop: Dan'l Webster Inn & Spa</p>
                    <p>Next stop: Earl of Sandwich Motel</p>
                    <p>Next stop: Sandy Neck Motel</p>
            </Col>
            <Col style={{ backgroundColor: '#E3D9CA'}} className='subtitleDayOf' xs={24} lg={12} align='center'>
                <h2>Wedding: Saturday, September 4th</h2>
                    <p style={{ marginTop: '2rem'}}>12:45 PM: Sandwich Lodge & Resort</p>
                    <p>Next stop: Dan'l Webster Inn & Spa</p>
                    <p>Next stop: Earl of Sandwich Motel</p>
                    <p>Shuttles home @ 9, 10 & 11 PM, stopping at: Sandwich Lodge & Resort, Dan'l Webster Inn & Spa, Earl of Sandwich, and Sandy Neck Motels as needed.</p>
            </Col>
        </Row>
    </div>
  );
}

export default Shuttles;


