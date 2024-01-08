// src/components/NavBar.js
import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';


const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  height: fit-content;

  @media (min-width: 60em) {
    padding: 1.5rem 5rem;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff; /* Set text color to white */
  font-weight: bold; /* Optional: Set font weight to bold */
  background-color: #5797FF;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 60em) {
    font-size: 1rem;
  }
`;

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyledNavBar>
      <LogoContainer href="#" title="Home">
        <NavLink to="/" title="Home"><h2>NoseIQ</h2></NavLink>
      </LogoContainer>
      <div>
      
        <NavLink to="/how-it-works" title="How it Works">About Us</NavLink>
        <NavLink to="/blog" title="Blog">Our Services</NavLink>
        <NavLink to="/press" title="Press">FAQ</NavLink>
        <NavLink to="/contact" title="Contact">Contact</NavLink>
        <NavLink to="/contact" title="Contact">Our Clients</NavLink>
        <NavLink to="/contact" title="Contact">Case Studies</NavLink>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
