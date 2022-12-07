import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './services.css';

class Services extends React.Component {
    render() {
      return (    
        <Container breakpoint='xxl' className='mt-5 a-i-center' id='services'>
            <Row>
                <Col>
                    <Card>
                        <LanguageIcon fontSize='large' />
                        <h2>WEB DEVELOPMENT</h2>
                        <div className='card-text'>
                            Magento, WordPress, Woocommerce, landing pages. Bootstrap layout, Jquery or React. Mysql, JSON or Firebase.
                        </div>
                        <Button variant="primary services-but">          
                            I whant this
                        </Button>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <AndroidIcon fontSize='large' />
                        <h2>APPS</h2>
                        <div className='card-text'>
                        High experience in cordova apps development cordova, now we are working on react and firebase.
                        </div>
                         <Button variant="primary services-but">          
                            I whant this
                        </Button>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ThumbUpIcon fontSize='large' />
                        <h2>ENJOY</h2>
                        <div className='card-text'>
                        I strive to provide a high quality product and to achieve 100% satisfaction in the final product.</div>
                         <Button variant="primary services-but">          
                            I whant this
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Services;