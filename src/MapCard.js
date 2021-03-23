import { Row } from 'antd';
import GoogleMap from './GoogleMap';

const MapCard = () => {

    return(
        <div>
            <Row>
                <div style={{ height: '90vh' }}>
                    <GoogleMap />
                </div>
            </Row>
        </div>
    )
}

export default MapCard;