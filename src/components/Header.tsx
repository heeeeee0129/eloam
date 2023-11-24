// src/components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import Logo from "/assets/eloam.svg";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: -5px;
  z-index: 1000;
`;

const LogoContainer = styled(Link)`
  margin: 15px;
  text-decoration: none;
  color: black;
  img {
    width: 40px;
    height: auto;
  }
`;
const NavItemContainer = styled.div`
  margin-bottom: 2px;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
`;

const CategoryTitle = styled.h1`
  margin-bottom: 0px;
  padding: 2px;
  font-size: 9px;
  align-self: flex-end;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  right: 30px;
  top: 11px;
  z-index: 1;
`;

const NavItem = styled(Link)`
  padding: 0.2rem;
  text-decoration: none;
  font-size: 5px;
  color: black;
  align-self: flex-end;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuIcon = styled(BiMenuAltRight)`
  cursor: pointer;
  width: 13px;
  height: 13px;
  margin: 15px;
`;

const CloseIcon = styled(RiCloseLine)`
  cursor: pointer;
  width: 13px;
  height: 13px;
  margin: 15px;
`;

const Header: React.FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={Logo} alt="Logo" />
      </LogoContainer>
      {isNavOpen ? (
        <CloseIcon size={24} onClick={toggleNav} />
      ) : (
        <MenuIcon size={24} onClick={toggleNav} />
      )}

      <Nav isOpen={isNavOpen}>
        <NavItemContainer>
          <CategoryTitle>About Us</CategoryTitle>
          <NavItem to="/company">Company</NavItem>
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/vision">Vision</NavItem>
        </NavItemContainer>

        <NavItemContainer>
          <CategoryTitle>Product</CategoryTitle>
          <NavItem to="/guide">Guide</NavItem>
          <NavItem to="/materials">Materials</NavItem>
          <NavItem to="/product">Product</NavItem>
          {/* <NavItem to="/">Main</NavItem> */}
        </NavItemContainer>

        <NavItemContainer>
          <CategoryTitle>Contact Us</CategoryTitle>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/faq">FQA</NavItem>
        </NavItemContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
