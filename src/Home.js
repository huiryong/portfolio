import React from "react";
import { styled } from "styled-components";
import Work from "./pages/Work";
import About from "./pages/About";
import AnchorLinkSmoothScroll from "react-anchor-link-smooth-scroll";

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
  height: 800px;
  font-family: "Darumadrop One", sans-serif;
  @media (max-width: 768px) {
    height: 600px;
  }
  @media (max-width: 375px) {
    height: 400px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25vh;
  padding-bottom: 100px;
  gap: 70px;
  @media (max-width: 768px) {
    gap: 40px;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding-top: 10vh;
    padding-bottom: 50px;
  }
`;

const TitleH1 = styled.h1`
  font-size: 8vw;
  font-family: "Archivo Black", sans-serif;
  @media (max-width: 768px) {
  }
  @media (max-width: 375px) {
    order: 0;
  }
`;

const StyledAnchorLink = styled(AnchorLinkSmoothScroll)`
  font-family: "Archivo Black", sans-serif;
  font-size: 3vw;
  color: black;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 375px) {
    order: 1;
  }
`;

const Name = styled.p`
  font-family: "Pinyon Script", cursive;
  font-size: 8vw;
  text-align: center;
  @media (max-width: 768px) {
  }
  @media (max-width: 375px) {
    font-size: 50px;
  }
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Shutter></Shutter>
        <Title>
          <StyledAnchorLink offset="100" href="#work">
            WORK
          </StyledAnchorLink>
          <TitleH1>PORTFOLIO</TitleH1>
          <StyledAnchorLink offset="100" href="#about">
            ABOUT
          </StyledAnchorLink>
        </Title>
        <Name>KouHuiRyong</Name>
      </Wrapper>
      <Work id={"work"} />
      <About id={"about"} />
    </>
  );
};

export default Home;
