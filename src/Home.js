import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Work from "./pages/Work";
import About from "./pages/About";

const Shutter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 9999;
  animation: byeShutter 2.6s forwards;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-color: pink;
    width: 0;
    height: 1px;
    animation: shutterOpen 2.6s forwards;
  }
  .content {
    animation: contentScale 2.6s forwards;
  }

  @keyframes byeShutter {
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
      z-index: -1;
    }
  }

  @keyframes shutterOpen {
    0% {
      width: 0;
      height: 1px;
    }
    50% {
      width: 100%;
      height: 1px;
    }
    90% {
      width: 100%;
      height: 100%;
    }
    100% {
      width: 100%;
      height: 100%;
    }
  }

  @keyframes contentScale {
    70% {
      transform: perspective(800px) scale(0.9) rotateX(15deg);
    }
    100% {
      transform: perspective(800px) scale(1) rotateX(0);
    }
  }
`;

const Wrapper = styled.section`
  background-color: pink;
  height: 100vh;
  font-family: "Darumadrop One", sans-serif;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25vh;
  padding-bottom: 100px;
  gap: 100px;
`;

const TitleH1 = styled.h1`
  font-size: 80px;
  font-family: "Archivo Black", sans-serif;
`;

const StyledLink = styled(Link)`
  font-family: "Archivo Black", sans-serif;
  font-size: 30px;
  color: black;
  &:hover {
    opacity: 0.5;
  }
`;
const Name = styled.p`
  font-family: "Pinyon Script", cursive;
  font-size: 200px;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Shutter></Shutter>
        <Title>
          <StyledLink to="/work">WORK</StyledLink>
          <TitleH1>PORTFOLIO</TitleH1>
          <StyledLink to="/about">ABOUT</StyledLink>
        </Title>
        <Name>KouHuiRyong</Name>
      </Wrapper>
      <Work />
      <About />
    </>
  );
};

export default Home;
