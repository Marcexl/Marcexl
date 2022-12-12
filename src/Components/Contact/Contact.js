import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Data from './contact.json';
import './contact.css';

function Contact(props) {
    const leng = props.title;

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <Container className='contact-container' id="contact"> 
            <Row>
                <Col className='contact-container-form'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                    <h5 className='mb-5'>{Data[0]['title'][leng]}</h5>
                    
                    <Form.Group as={Col} md="6" controlId="validationCustom01" className='pr-2'>
                        <Form.Control
                            required
                            type="text"
                            placeholder={Data[0]['name'][leng]}
                            defaultValue=""
                        />
                    </Form.Group>
                    
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Control
                            required
                            type="text"
                            placeholder={Data[0]['fname'][leng]}
                            defaultValue=""
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom03" className='pr-2'>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            defaultValue=""
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Control
                            required
                            type="number"
                            placeholder={Data[0]['phone'][leng]}
                            defaultValue=""
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                        <Form.Control 
                            as="textarea" 
                            aria-label="With textarea" 
                            placeholder={Data[0]['consult'][leng]}
                        />
                    </Form.Group>
                    
                    <Button type="submit">{Data[0]['button'][leng]}</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                <h6>{Data[0]['title2'][leng]}</h6>
                    <address>
                        <a href="#home">
                            <HomeIcon />
                            <span>Colombres 758. (1218) Buenos Aires. Argentina.</span>
                        </a>
                        <br />
                        <a href={"https://wa.me/5491123922906?text="+Data[0]['wame'][leng]+""}>
                            <WhatsAppIcon />
                            <span>+5491123922906</span>
                        </a>
                        <br />
                        <a href="mailto:info@marcexl.com.ar"> 
                            <EmailIcon />
                            <span>info@marcexl.com.ar</span>
                        </a>
                    </address>
                </Col>
            </Row>
        </Container>
    );
  }
  
export default Contact;
