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
  background-color: blue;
  hieght: fit-content;

  @media (min-width: 60em) {
    padding: 1.5rem 5rem;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 60em) {
    font-size: 1rem;
  }
`;

const DropdownButton = styled.button`
  /* Your styles for the dropdown button */
`;

const DropdownMenu = styled.div`
  /* Your styles for the dropdown menu */
`;

const DropdownItem = styled(Link)`
  /* Your styles for the dropdown item */
`;

const NavBar = () => {
 //state track if its open the setstate
 const [isDropdownOpen, setDropdownOpen] = React.useState(false);
 //create function for the dropdowntoggle
 const handleDropdownToggle = () => {
   setDropdownOpen(!isDropdownOpen);
 };


  return (
    <StyledNavBar>
      <LogoContainer href="#" title="Home">
        <h2>NoseIQ</h2>
      </LogoContainer>
      <div>
        <NavLink to="/" title="Home">Home</NavLink>
        <NavLink to="/how-it-works" title="How it Works">How it Works</NavLink>
        <NavLink to="/blog" title="Blog">Blog</NavLink>
        <NavLink to="/press" title="Press">Press</NavLink>
        <NavLink to="/contact" title="Contact">Contact</NavLink>
        <DropdownButton onClick={handleDropdownToggle}>
          More
          {isDropdownOpen ? (
          <DropdownMenu>
            <DropdownItem to="/press">Press</DropdownItem>
            <DropdownItem to="/contact">Contact</DropdownItem>
          </DropdownMenu> 
           ) : null}
        </DropdownButton>
        
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
