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
        <Col span={8} style={{ fontFamily: 'Cormorant Unicase' }}>
          Welcome Clambake
        </Col>
        <Col span={8} style={{ fontFamily: 'Cormorant Unicase' }}>
          Wedding
        </Col>
        <Col span={8} style={{ fontFamily: 'Cormorant Unicase' }}>
          Beach <span style={{ fontFamily: 'Sacramento' }}>and</span> Goodbyes
        </Col>
      </Row>
    </div>
  );
}

export default App;
