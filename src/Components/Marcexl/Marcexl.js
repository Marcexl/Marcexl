
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';
import MovingText from 'react-moving-text';
import Button from 'react-bootstrap/Button';
import Data from './marcexl.json';
import './marcexl.css';

function Marcexl(props){
    const leng = props.title;
    return (    
    <Container id='marcexl' className='full-h section'>
        <Row>
            <Col className='salute'>
                <h3>{Data[0]['title'][leng]['h3']} <span>{Data[0]['title'][leng]['span']}</span></h3>
                <h1>
                    <Typewriter
                        options={{
                            strings: [''+Data[0]['name'][leng]+''] ,
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
                        {Data[0]['buttons'][leng][1]}
                    </Button>
                    <a href="tel:+5491123922906">
                        <Button variant="secondary">          
                            {Data[0]['buttons'][leng][2]}
                        </Button>
                    </a>
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default Marcexl;