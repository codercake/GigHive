import React from 'react'; 
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import paymentIcon1 from '../../assets/payment1.png'; 
import paymentIcon2 from '../../assets/payment2.png';
import paymentIcon3 from '../../assets/payment3.png';

const FooterWrapper = styled.footer`
  background-color: #1e0b36; /* Dark purple background */
  color: #fff;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  bottom: 0;
  width: 100%;
  z-index: 1;
  text-align: left;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;
  margin-right: 3rem; /* Add space between the logo and the footer columns */

  span {
    color: #ff6f61; /* Red dot */
  }
`;

const FooterColumn = styled.div`
  margin-right: 2rem;
  flex: 1;
  min-width: 200px;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #ffeb3b; /* Yellow color on hover */
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 1rem;

  a {
    color: #fff;
    margin-right: 1rem;
    font-size: 2rem; /* Increased size for social media icons */
    transition: color 0.3s;

    &:hover {
      color: #ffeb3b; /* Yellow color on hover */
    }
  }
`;

const PaymentIcons = styled.div`
  display: flex;
  margin-top: 1rem;

  img {
    margin-right: 1rem;
    height: 40px; /* Adjust the height as needed */
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  font-size: 0.9rem;
  border-top: 1px solid #fff;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo>
        GigHive
      </Logo>

      <FooterColumn>
        <h4>For Candidates</h4>
        <ul>
          <li><a href="/overview">Overview</a></li>
          <li><a href="/startup-jobs">Startup Jobs</a></li>
          <li><a href="/web3-jobs">Web3 Jobs</a></li>
          <li><a href="/featured">Featured</a></li>
          <li><a href="/salary-calculator">Salary Calculator</a></li>
          <li><a href="/tech-startups">Tech Startups</a></li>
          <li><a href="/remote">Remote</a></li>
        </ul>
      </FooterColumn>

      <FooterColumn>
        <h4>For Recruiters</h4>
        <ul>
          <li><a href="/recruit-overview">Overview</a></li>
          <li><a href="/recruit-pro">Recruit Pro</a></li>
          <li><a href="/curated">Curated</a></li>
          <li><a href="/hire-developers">Hire Developers</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul>
      </FooterColumn>

      <FooterColumn>
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/help">Help</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/terms-risks">Terms & Risks</a></li>
          <li><a href="/privacy-cookies">Privacy & Cookies</a></li>
        </ul>
      </FooterColumn>

      <PaymentIcons>
        <img src={paymentIcon1} alt="Payment Method 1" />
        <img src={paymentIcon2} alt="Payment Method 2" />
        <img src={paymentIcon3} alt="Payment Method 3" />
      </PaymentIcons>

      <SocialIcons>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </SocialIcons>

      <Copyright>
        &copy; 2024 GigHive. All Rights Reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
