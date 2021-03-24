import { Layout } from 'antd';

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: 'center', padding: '35px', backgroundColor: '#CFBEAB', color: 'white' }}>
      <a style={{ color: 'white' }} href='https://maryelizabethbaker.com' target='blank'>maryelizabethbaker.com </a> 
      | Made with Love at Twenty Roos Road |
      <a style={{ color: 'white' }} href='https://willwashburn.com' target='blank'> willwashburn.com</a>
    </Footer>
  );
};

export default Footer;