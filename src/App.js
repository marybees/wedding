import './index.less'
import { Row, Col } from 'antd';

function App() {

  return (
    <div>
      <Row>
        <Col span={24}>
          <h1 className='title'>Mary <span>and</span> Will</h1>
        </Col>
      </Row>
      <Row>
        <Col className='subtitle' span={8}>
          Welcome Clambake
        </Col>
        <Col className='subtitle' span={8}>
          Wedding
        </Col>
        <Col className='subtitle' span={8}>
          Beach <span>and</span> Goodbyes
        </Col>
      </Row>
      <Row>
        <Col className='subtitle' span={12}>Where <span>to</span> Stay</Col>
        <Col className='subtitle' span={12}>Getting There</Col>
      </Row>
      <Row>
        <Col className='subtitle' span={12}>Our Story</Col>
        <Col className='subtitle' span={12}>Registry</Col>
      </Row>
      <Row>
        <Col className='subtitle' span={12}>Request <span>a</span> Song</Col>
        <Col className='subtitle' span={12}>Share <span>a</span> Memory</Col>
      </Row>
      <Row>
        <Col className='subtitle' span={12}>Things <span>to</span> Do <span>on</span> Cape Cod</Col>
        <Col className='subtitle' span={12}>COVID-19</Col>
      </Row>
    </div>
  );
}

export default App;
