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
import CloseIcon from '@mui/icons-material/Close';
import Data from './header.json';
import './header.css';

function Header(props) { 
  
  const leng = props.title;
  let flag = 0;
  
  function ExplodeBoxes(){
    /* get elem for work */
    const elem = document.getElementById("squarescontainer");
    const elem2 = document.querySelector(".section");

    if(flag === 0){
      /* add clases */
      elem.classList.add('front');
      elem2.classList.add('filter');
      document.getElementById('closebox').style.display = 'block';
      document.getElementById('playbox').style.display = 'none';
      flag++;
    }
    else
    {
      /* remove classes */ 
      flag--;
      elem.classList.remove('front');
      elem2.classList.remove('filter');
      document.getElementById('closebox').style.display = 'none';
      document.getElementById('playbox').style.display = 'block';
    }

  }

  return (
    <Navbar bg="light" className="vertical-nav">
      <Container>
        <Navbar.Brand href="#marcexl">
          <img src={Avatar} alt='Avatar' className='avatar'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#about" className="blue-link">
              <AccountCircleIcon />
              <span>{Data[0][1][leng]}</span>
            </Nav.Link>
            <Nav.Link href="#projects" className="blue-link">
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
              <div className="playarround" onClick={ExplodeBoxes}>
                <div id="playbox">
                  <PlayCircleOutlineIcon />
                  <span>Destroy boxes</span>
                </div>

                <div id="closebox">
                  <CloseIcon />
                  <span>Close</span>
                </div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;