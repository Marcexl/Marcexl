import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from './about.json';
import './about.css';

function About(props){
    
    const leng = props.title;

    return (    
    <Container breakpoint='xxl' className='mt-5 a-i-center section' id='about'>
        <Row>
            <Col>
                <div className='timeline'>
                    <div className='timeitem'>
                        <span className='timeyear right'>Today</span>
                        <p>{Data[0]['today'][leng]}</p>
                    </div>
                    <div className='timeitem'>
                        <span className='timeyear left'>2022</span>
                        <p>{Data[0]['2022'][leng]}</p>
                    </div>
                    <div className='timeitem'>
                        <span className='timeyear right'>2021</span>
                        <p>{Data[0]['2021'][leng]}</p>
                    </div>

                    <div className='timeitem'>
                        <span className='timeyear left'>2020</span>
                        <p>{Data[0]['2020'][leng]}</p>
                    </div>
                    <div className='timeitem'>
                        <span className='timeyear right'>2014</span>
                        <p>{Data[0]['2014'][leng]}</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default About;