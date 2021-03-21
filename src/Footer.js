import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: 'center', padding: '35px' }}>
      <Link to='https://maryelizabethbaker.com'>maryelizabethbaker.com</Link> 
      | Made with Love at 20 Roos Road |
      <Link to='https://willwashburn.com'>willwashburn.com</Link>
    </Footer>
  );
};

export default Footer;