import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';

function About(){
    return (    
    <Container breakpoint='xxl' className='mt-5 a-i-center' id='about'>
        <Row>
            <Col>
                <div className='timeline'>
                    <p>I am a frontend developer, I specialize in frontend layout, Work with API services to display de json results. I like being able to meet the proposed goals and objectives.</p>
                    <p>Shoober shooberino adorable doggo many pats, heckin good boys many pats pupper wrinkler, corgo maximum borkdrive. A frighten puggo wow very biscit.</p>
                    <p>Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot for pats big ol, he made many woofs doing me a frighten puggo wow very biscit, ruff fat boi ruff long doggo. </p>
                    <p>Long bois mlem I am bekom fat wrinkler puggo maximum borkdrive big ol pupper I am bekom fat, fluffer vvv adorable doggo lotsa pats snoot. I am bekom fat ur givin me a spook length boy wow very biscit very good spot.</p>
                    <p>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default About;