import React from "react";
import styled from "styled-components";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className='common-heading'>Feel Free To Contact Us</h2>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11874.630433949924!2d-87.64239506465026!3d41.921718633320744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd36b093a9a07%3A0x940cc06f90294db!2sLincoln%20Park%20Zoo!5e0!3m2!1sen!2sus!4v1679919663952!5m2!1sen!2sus'
        width='100%'
        height='450'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'></iframe>
      <div className='container'>
        <div className='contact-form'>
          <form
            action='https://formspree.io/f/mzbqalge'
            method='POST'
            className='contact-inputs'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              autoComplete='off'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              autoComplete='off'
              required
            />
            <textarea
              name='message'
              cols='30'
              rows='6'
              autoComplete='off'
              required></textarea>
            <input type='submit' value='Send' />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
