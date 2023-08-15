import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.section`
  background-color: pink;
  height: 100vh;
`;

const AboutTitle = styled.h2`
  font-size: 50px;
  text-align: center;
  padding: 50px 0;
  border-bottom: 1px solid black;
`;

const Name = styled.h3`
  font-size: 60px;
  > p {
    font-size: 16px;
  }
`;

const Skill = styled.h3`
  font-size: 30px;
`;

const SkillContent = styled.div``;

const Plofile = styled.h2``;

const About = () => {
  return (
    <Wrapper>
      <AboutTitle>
        <h2>About</h2>
      </AboutTitle>
      <Name>
        <h3>高希怜(Kou HuiRyong)</h3>
        <p>
          7年間幼稚園に勤務していましたが、子どもを抱っこし過ぎて腰をいわしました…そこで別業種に転職を決意、職業訓練を通してwebデザインやフロントに興味を持ちました。{" "}
        </p>
      </Name>

      <Skill>
        <h3>スキル</h3>
        <SkillContent>
          <p>言語：HTML/CSS/JavaScript/jQuery/React</p>
          <p>ツール：Illustrator/Photoshop</p>
          <p>その他：Word/PowerPoint</p>
        </SkillContent>
      </Skill>
      <Plofile>経歴</Plofile>
    </Wrapper>
  );
};

export default About;
