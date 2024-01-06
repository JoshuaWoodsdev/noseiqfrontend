// src/components/NavBar.js
import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import StyledArticle from "./navComponents/navCard";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  background-color: blue;
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

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff; /* Set text color to white */
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
  position: relative; /* Make the button container for absolute positioning */
  background: none;
  border: none;
  cursor: pointer;
  color: #fff; /* Set text color to white */
  font-size: 0.9rem;
  margin-right: 1rem;

  @media (min-width: 60em) {
    font-size: 1rem;
  }
`;

const DropdownMenu = styled.div`
  /* Remove position: absolute; */
  top: 100%; /* Position below the button */
  left: 0;
  width: auto; /* Set the width to auto or 100% as needed */
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: black;
  border: 1px solid #fff;
  z-index: 1; /* Ensure the dropdown appears above other elements */
`;



const DropdownItem = styled(Link)`
  text-decoration: none;
  color: #fff; /* Set text color to white */
  padding: 0.5rem;
  &:hover {
    background-color: #444; /* Optional: Change the background color on hover */
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
        <h2>NoseIQ</h2>
      </LogoContainer>
      <div>
        <NavLink to="/" title="Home">Home</NavLink>
        <NavLink to="/how-it-works" title="How it Works">How it Works</NavLink>
        <NavLink to="/blog" title="Blog">Blog</NavLink>
        <NavLink to="/press" title="Press">Press</NavLink>
        <NavLink to="/contact" title="Contact">Contact</NavLink>
        <div>
        <DropdownButton onClick={handleDropdownToggle}>
          More
          <DropdownMenu isOpen={isDropdownOpen}>
            <DropdownItem to="/press"><StyledArticle />
            </DropdownItem>

            <DropdownItem to="/contact">Contact
            </DropdownItem>
          </DropdownMenu>
        </DropdownButton>
        </div>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
