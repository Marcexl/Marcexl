import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from './avatar.jpg';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import DialpadIcon from '@mui/icons-material/Dialpad';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Lenguaje from './Lenguaje/Lenguaje';
import './header.css';

function Header() {
  
  return (
    <Navbar bg="light" className="vertical-nav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Avatar} alt='Avatar' className='avatar'/>
          <Lenguaje />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#about" className="blue-link">
              <AccountCircleIcon />
              <span>About me</span>
            </Nav.Link>
            <Nav.Link href="#proyect" className="blue-link">
              <HomeRepairServiceIcon />
              <span>Proyects</span>
            </Nav.Link>
            <Nav.Link href="#contact" className="blue-link">
              <DialpadIcon />
              <span>Hire me</span>
            </Nav.Link>
            <div className='social-icons'>

              <LinkedInIcon />
              <InstagramIcon />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;