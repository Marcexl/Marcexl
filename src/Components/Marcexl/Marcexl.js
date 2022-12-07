import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';
import MovingText from 'react-moving-text';
import Button from 'react-bootstrap/Button';
import Data from './marcexl.json';
import './marcexl.css';

function Marcexl(){
    let len = localStorage.getItem('len') ? localStorage.getItem('len') : "eng";
    return (    
    <Container id='marcexl' className='full-h'>
        <Row>
            <Col className='salute'>
                <h3>{Data[0]['title'][len]['h3']} <span>{Data[0]['title'][len]['span']}</span></h3>
                <h1>
                    <Typewriter
                        options={{
                            strings: [''+Data[0]['name'][len]+''] ,
                            autoStart: true,
                            loop: true,
                            pauseFor:8000
                        }}
                    />
                </h1>
                <h2>
                    <MovingText
                        type="jelly"
                        duration="1000ms"
                        delay="5s"
                        direction="alternate"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        Frontend Developer
                    </MovingText>
                </h2>
                <div className='marcexl-buttons'>
                    <Button variant="primary">          
                        {Data[0]['buttons'][len][1]}
                    </Button>
                    <Button variant="secondary">          
                        {Data[0]['buttons'][len][2]}
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default Marcexl;