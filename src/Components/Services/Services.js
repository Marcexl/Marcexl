import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Data from './services.json';
import './services.css';

class Services extends React.Component {

    render() {
      return (      
        <Container breakpoint='xxl' className='mt-5 a-i-center section' id='services'>
            <Row>
                <Col>
                    <Card>
                        <LanguageIcon fontSize='large' />
                        <h2>{Data[0]['card1'][this.props.title]['title']}</h2>
                        <div className='card-text'>
                            {Data[0]['card1'][this.props.title]['text']}
                        </div>
                        <a href='#contact'>
                            <Button variant="primary services-but">          
                                {Data[0]['buttons'][this.props.title]}
                            </Button>
                        </a>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <AndroidIcon fontSize='large' />
                        <h2>{Data[0]['card2'][this.props.title]['title']}</h2>
                        <div className='card-text'>
                            {Data[0]['card2'][this.props.title]['text']}                        
                        </div>
                        <a href='#contact'>
                            <Button variant="primary services-but">          
                                {Data[0]['buttons'][this.props.title]}
                            </Button>
                        </a>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ThumbUpIcon fontSize='large' />
                        <h2>{Data[0]['card3'][this.props.title]['title']}</h2>
                        <div className='card-text'>
                            {Data[0]['card3'][this.props.title]['text']}
                        </div>
                        <a href='#contact'>
                            <Button variant="primary services-but">          
                                {Data[0]['buttons'][this.props.title]}
                            </Button>
                        </a>
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Services;