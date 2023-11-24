import React, { useState } from 'react';
import {
  NavbarContainer,
  TopNav,
  BottomNav,
  SaleText,
  LinksContainer,
  NavLink,
  Nav,
  Logo,
  Img,
  MenuButton,
  SearchContainer,
  SearchInput,
  NavLinksRight,
} from './Nav.style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true); // Set isOpen to true by default

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <TopNav>
        <SaleText>
          <span>EARLY BLACK FRIDAY SALE: $1,350 IN TOTAL SAVINGS</span> |{' '}
          <span>APPLY CODE AT CHECKOUT: EARLYFRIDAY</span>
        </SaleText>
        <LinksContainer>
          <NavLink href="/find-stores">
            <span>
              <img src="/assets/locationIcon.svg" className="icoimg" alt="location" />
            </span>
            <span>Find Stores</span>
          </NavLink>
          <NavLink href="/support">
            <span>
              <img src="/assets/phone.svg" className="icoimg" alt="phone" />
            </span>
            <span>Support</span>
          </NavLink>
          <NavLink href="/my-account">
            <span>
              <img src="/assets/account.svg" className="icoimg" alt="account" />
            </span>
            <span>My Account</span>
          </NavLink>
        </LinksContainer>
      </TopNav>

      <Nav>
      <MenuButton onClick={toggleMenu}>
          <img src="/assets/svgLines.svg" alt="hamburger"/>
        </MenuButton>
        <Logo>
          <Img src="/assets/Logo.svg" alt="Logo"/>
        </Logo>
        <LinksContainer style={{ display: isOpen ? 'flex' : 'none' }}>

          <NavLink href="/">Matresses</NavLink>
          <NavLink href="/">Smart Beds</NavLink>
          <NavLink href="/">Bed Frames</NavLink>
          <NavLink href="/">Bedding & More</NavLink>
          <NavLink href="/">Sale</NavLink>
        </LinksContainer>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>
        <NavLinksRight>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/compare">Compare</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          {/* Add your cart icon here */}
          <img src="/assets/CartIcon.svg" alt="Cart" />
        </NavLinksRight>
      </Nav>

      <BottomNav style={{ display: isOpen ? 'none' : 'block' }}>
    
        <LinksContainer>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/find-stores">Find Stores</NavLink>
          <NavLink href="/support">Support</NavLink>
        </LinksContainer>
      </BottomNav>
    </NavbarContainer>
  );
};

export default Navbar;
