import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem; /* Add margin below the navbar */
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 1rem;
`;

function Navbar() {
  return (
    <Nav>
      <LogoContainer to="/">
        <Logo src="/logo.png" alt="El Safwa Cargo Logo" />
        El Safwa Cargo
      </LogoContainer>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/industries">Industries</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        {/* <NavLink to="/track">Track Your Shipment</NavLink> */}
        {/* <NavLink to="/testimonials">Testimonials</NavLink> */}
        {/* <NavLink to="/blog">Blog</NavLink> */}
        <NavLink to="/careers">Careers</NavLink>
      </div>
    </Nav>
  );
}

export default Navbar;
