import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.section`
  background-color: pink;
  height: 100vh;
  > h2 {
    text-align: center;
    border-bottom: 1px solid black;
  }
`;
const WorkContent = styled.div`
  display: flex;
  padding: 60px;
  > h2 {
    text-align: center;
    border-bottom: 1px solid black;
  }
`;
const Text = styled.div`
  width: 40%;
  > h3 {
    font-size: 60px;
    margin-bottom: 30px;
  }
`;

const ImgBlock = styled.div`
  width: 60%;
  > img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
`;

const Website = styled.div``;
const App = styled.div``;
const Practice = styled.div``;

const Work = () => {
  return (
    <Wrapper>
      <h2>Work</h2>
      <WorkContent>
        <Text>
          <Website>
            <h3>website</h3>
            <p>仮想サイトの制作</p>
            <a href="#">01</a>
            <a href="#">02</a>
          </Website>
          <App>
            <h3>app</h3>
            <p>Reactを用いたアプリの制作</p>
            <a href="#">01</a>
          </App>
          <Practice>
            <h3>practice</h3>
            <a href="#">その他、模写コーディングなど</a>
          </Practice>
        </Text>
        <ImgBlock>
          <img src="images/flower.jpg" alt="" />
        </ImgBlock>
      </WorkContent>
    </Wrapper>
  );
};

export default Work;
