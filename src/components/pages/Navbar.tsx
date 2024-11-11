import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../state/Store';

function NavBar() {
  const carts = useSelector((state: RootState) => state.cart);

  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Link className="navbar-brand" to="/">E-commerce</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/Product" className="nav-link">Product</Link>
            <Link to="/cart" className="nav-link">Cart: {carts.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
