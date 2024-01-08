// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 2rem 1rem;
  border-top: 1px solid #000;
  color: #444;
`;

const EmailLink = styled.a`
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: #000;
  line-height: 1.5;
  
  &:hover {
    color: #666;
  }
`;

const CopyrightText = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.5;
`;

const LinksContainer = styled.div`
  margin-top: 2rem;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: #666;
  margin: 0 0.5rem;
  
  &:hover {
    color: #000;
  }
`;

const Footer = () => (
  <StyledFooter>
    <EmailLink href="mailto:hello@email.com">noseiq@email.com</EmailLink>
    <CopyrightText>© 2024 NoseIQ Inc.</CopyrightText>
    <LinksContainer>
      <FooterLink href="/language/" title="Language">Language</FooterLink>
      <FooterLink href="/terms/" title="Terms of Use">Terms of Use</FooterLink>
      <FooterLink href="/privacy/" title="Privacy">Privacy</FooterLink>
    </LinksContainer>
  </StyledFooter>
);

export default Footer;
