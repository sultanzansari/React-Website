import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready To Get Started</h3>
            <h3>Talk To Us Today</h3>
          </div>
          <div>
            <NavLink to='/'>
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>Sultan Ansari</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className='footer-subscribe'>
            <h3>Get Important Updates</h3>
            <form action='#'>
              <input
                type='email'
                required
                autoComplete='off'
                placeholder='Email'
              />
              <input type='submit' value='Submit' />
            </form>
          </div>

          <div className='footer-social'>
            <h3>Follow Us</h3>
            <div className='footer-social-icons'>
              <div>
                <FaLinkedin className='icons' />
              </div>
              <div>
                <FaInstagram className='icons' />
              </div>
              <div>
                <FaFacebook className='icons' />
              </div>
            </div>
          </div>

          <div className='footer-contact'>
            <h3>Call Us</h3>
            <h3>+1 9876543212</h3>
          </div>
        </div>
        <div className='footer-bottom-section'>
          <hr />
          <div className='container grid grid-two-column'>
            <p>@{new Date().getFullYear()} SultanAnsari. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social-icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom-section {
      padding-top: 9rem;
    }

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
`;
export default Footer;
