import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./style/Button";

function Error() {
  return (
    <Wrapper>
      <img src='../images/Error.webp' alt='Error' />
      <NavLink to='/'>
        <Button className='btn'>Go Back</Button>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    margin-top: 3rem;
    font-size: 1.8rem;
  }
`;
export default Error;
