import React from 'react'

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./styles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "whitesmoke", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Mark's Shop
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/">Shop</FooterLink>
          </Column>
          <Column>
            <Heading>Follow us on</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;