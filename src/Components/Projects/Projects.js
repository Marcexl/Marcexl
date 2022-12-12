import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './projects.css';

const text = {eng: "Live view", arg: "Ir al sitio"};

class Projects extends React.Component {
     
    render() {
      return (      
        <Container breakpoint='xxl' className='mt-5 a-i-center section' id='projects'>
            <Row>
                <Col>
                    <img src={require('./001.jpg')} alt='' class="project-thumb br1"/>
                    <span>{text[this.props.title]}</span>

                </Col>
                <Col>
                    <img src={require('./008.jpg')} alt='' class="project-thumb br2"/>
                    <span>{text[this.props.title]}</span>

                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={require('./003.jpg')} alt='' class="project-thumb"/>
                    <span>{text[this.props.title]}</span>

                </Col>
                <Col>
                    <img src={require('./004.jpg')} alt='' class="project-thumb"/>
                    <span>{text[this.props.title]}</span>

                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={require('./005.jpg')} alt='' class="project-thumb"/>
                    <span>{text[this.props.title]}</span>

                </Col>
                <Col>
                    <img src={require('./006.jpg')} alt='' class="project-thumb"/>
                    <span>{text[this.props.title]}</span>

                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={require('./007.jpg')} alt='' class="project-thumb br3"/>
                    <span>{text[this.props.title]}</span>

                </Col>
                <Col>
                    <img src={require('./002.jpg')} alt='' class="project-thumb br4"/>
                    <span>{text[this.props.title]}</span>

                </Col>
            </Row>
        </Container>);
    }
}

export default Projects;