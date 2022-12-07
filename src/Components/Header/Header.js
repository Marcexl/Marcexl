import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from './avatar.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import DialpadIcon from '@mui/icons-material/Dialpad';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Data from './header.json';
import './header.css';

function Header(props) {
  
  const leng = props.title;

  return (
    <Navbar bg="light" className="vertical-nav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Avatar} alt='Avatar' className='avatar'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#about" className="blue-link">
              <AccountCircleIcon />
              <span>{Data[0][1][leng]}</span>
            </Nav.Link>
            <Nav.Link href="#proyect" className="blue-link">
              <HomeRepairServiceIcon />
              <span>{Data[0][2][leng]}</span>
            </Nav.Link>
            <Nav.Link href="#contact" className="blue-link">
              <DialpadIcon />
              <span>{Data[0][3][leng]}</span>
            </Nav.Link>
            <div className='social-icons'>

              <a href="https://www.linkedin.com/in/marcelo-gallardo-02bb0235/">
                <LinkedInIcon />
              </a>
              <a href="https://www.instagram.com/bymarcexl/">
                <InstagramIcon />
              </a>
              <div className="playarround">
                <PlayCircleOutlineIcon />
                <span>Destroy boxes</span>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;