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
        <Col className='title' span={8}>
          Welcome Clambake
        </Col>
        <Col className='title' span={8}>
          Wedding
        </Col>
        <Col className='title' span={8}>
          Beach <span className='subtitle'>and</span> Goodbyes
        </Col>
      </Row>
      <Row>
        <Col className='title' span={12}>Where <span className='subtitle'>to</span> Stay</Col>
        <Col className='title' span={12}>Getting There</Col>
      </Row>
      <Row>
        <Col className='title' span={12}>Our Story</Col>
        <Col className='title' span={12}>Registry</Col>
      </Row>
      <Row>
        <Col className='title' span={12}>Request <span className='subtitle'>a</span> Song</Col>
        <Col className='title' span={12}>Share <span className='subtitle'>a</span> Memory</Col>
      </Row>
      <Row>
        <Col className='title' span={12}>Things <span className='subtitle'>to</span> Do <span className='subtitle'>ongit</span> Cape Cod</Col>
        <Col className='title' span={12}>COVID-19</Col>
      </Row>
    </div>
  );
}

export default App;
