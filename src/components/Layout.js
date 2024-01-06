// src/components/Layout.js
import React from "react";
import NavBar from "./nav";
import { Link } from "gatsby";
import styled from 'styled-components';
import StyledArticle from "./navComponents/navCard";

const DropdownButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  font-size: 0.9rem;
  margin-right: 1rem;

  @media (min-width: 60em) {
    font-size: 1rem;
  }
`;

const DropdownMenu = styled.div`
  top: 100%;
  left: 0;
  width: auto;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: black;
  border: 1px solid #fff;
  z-index: 1;
`;

const DropdownItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0.5rem;

  &:hover {
    background-color: #444;
  }
`;

const Layout = ({ children }) => {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <NavBar />
      <div>
        <DropdownButton onClick={handleDropdownToggle}>
          More
          <DropdownMenu isOpen={isDropdownOpen}>
            <DropdownItem to="/press">
              <StyledArticle />
            </DropdownItem>
            <DropdownItem to="/contact">Contact</DropdownItem>
          </DropdownMenu>
        </DropdownButton>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
