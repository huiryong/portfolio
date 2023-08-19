import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.section`
  background-color: pink;
  height: 1000px;
  @media (max-width: 768px) {
    height: 1500px;
  }
  @media (max-width: 768px) {
  }
`;

const AboutContent = styled.div`
  width: 80%;
  margin: 0px auto;
  padding-top: 100px;
  > h2 {
    text-align: center;
    font-size: 50px;
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    > h2 {
      font-size: 40px;
      padding-bottom: 100px;
    }
  }
  @media (max-width: 375px) {
    > h2 {
      font-size: 30px;
      padding-bottom: 80px;
    }
  }
`;

const Content = styled.div`
  padding-top: 10px;
  position: relative;
  display: flex;
  gap: 50px;
  justify-content: start;
  &::after {
    content: "";
    display: block;
    height: 600px;
    width: 0px;
    border-right: 2px solid black;
    position: absolute;
    top: 0;
    left: 50%;
  }
  @media (max-width: 768px) {
    display: block;
    &::after {
      display: none;
    }
  }
  @media (max-width: 768px) {
  }
`;

const Name = styled.div`
  width: 50%;
  padding-right: 20px;
  > h3 {
    width: 270px;
    font-size: 40px;
    &:first-child {
      border-bottom: black 1px solid;
    }
  }
  > p {
    margin-top: 20px;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0px;
  }
  > h3 {
    width: 200px;
    font-size: 30px;
  }
  @media (max-width: 375px) {
    > h3 {
      width: 140px;
      font-size: 20px;
    }
  }
`;

const Block = styled.div`
  width: 50%;
  padding-left: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0px;
    margin-top: 60px;
  }
  @media (max-width: 768px) {
  }
`;

const BlobkContent = styled.div`
  margin-bottom: 40px;
  > h3 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  > p {
    padding-left: 50px;
    line-height: 2;
    word-wrap: break-word;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    > h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    > p {
      padding-left: 30px;
      line-height: 2;
    }
  }
`;

const About = () => {
  return (
    <Wrapper id="about">
      <AboutContent>
        <h2>ABOUT</h2>
        <Content>
          <Name>
            <h3>高希怜</h3>
            <h3>Kou HuiRyong</h3>
            <p>
              7年間幼稚園に勤務していましたが、子どもを抱っこし過ぎて腰を痛めたことから別業種に転職を決意、職業訓練を通してwebデザインやフロントエンドに興味を持ちました。
            </p>
            <p>現在、React,TypeScript,Styled-Component,Next.jsを勉強中です。</p>
            <p>
              日本で生まれ育ったので日本語ネイティブです。韓国語も話したり、読み書き可能です。
            </p>
            <p>
              趣味はゲーム実況を見ることです。いろんな人が楽しんでいるコメントを見るのが好きです。
            </p>
          </Name>

          <Block>
            <BlobkContent>
              <h3>● Skill</h3>
              <p>言語：HTML/CSS/JavaScript/jQuery/React</p>
              <p>ツール：Illustrator/Photoshop/Figma/Clipstudio</p>
              <p>その他：Word/PowerPoint</p>
            </BlobkContent>
            <BlobkContent>
              <h3>● Profile</h3>
              <p>1994.8 広島県広島市出身</p>
              <p>2015.3 幼稚園教諭</p>
              <p>2022.9 職業訓練 webデザイン科</p>
              <p>2023.4 ANEX株式会社</p>
            </BlobkContent>
            <BlobkContent>
              <h3>● Contact</h3>
              <p>kou16955@gmail.com</p>
            </BlobkContent>
          </Block>
        </Content>
      </AboutContent>
    </Wrapper>
  );
};

export default About;
