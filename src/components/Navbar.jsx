import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

function MyNavbar() {

  const { isDarkTheme, handleToggleTheme } = useContext(ThemeContext)

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={isDarkTheme ? "dark" : "light"}>
      <Container>
      
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/book/list">Book List</Nav.Link>
            <Nav.Link as={Link} to="/book/add">Add a Book</Nav.Link>

            <button onClick={handleToggleTheme}>☀️/🌑</button>

          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default MyNavbar