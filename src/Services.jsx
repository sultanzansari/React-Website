import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./style/Button";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Web Development",
      image: "./images/Web.webp",
      description: "",
    },
    {
      id: 2,
      name: "App Development",
      image: "./images/App.svg",
      description: "",
    },
    {
      id: 3,
      name: "Software Development",
      image: "./images/Software.jpeg",
      description: "",
    },
    {
      id: 4,
      name: "Digital Marketing",
      image: "./images/Digital.webp",
      description: "",
    },
    {
      id: 5,
      name: "Graphic Designer",
      image: "./images/Graphic.png",
      description: "",
    },
    {
      id: 6,
      name: "Database Developer",
      image: "./images/Data.jpg",
      description: "",
    },
  ];

  return (
    <Wrapper className='secction'>
      <h2 className='common-heading'>Our Services</h2>
      <div className='container grid grid-three-column'>
        {services.map((curElem) => {
          const { id, name, image, description } = curElem;
          return (
            <div key={id} className='card'>
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className='card-data'>
                <h3>{name}</h3>
                <p>{description}</p>
                <NavLink to='/service'>
                  <Button className='btn'>Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }
  .card {
    text-align: center;
    border: 0.1rem solid rgba(170 170 170 /40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgba(0, 0, 0, 0);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }

      a {
        font-size: 1.4rem;
      }
    }
  }

  figure {
    width: auto;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &:hover img {
      transform: scale(1.05);
    }
    img {
      max-width: 100%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
`;

export default Services;
