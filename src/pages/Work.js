import React from "react";
import { styled } from "styled-components";
import WorkItem from "../components/WorkItem";

const WorkItems = [
  {
    title: "website",
    links: [
      { url: "http://huiryong2.site/website01.html", name: "01" },
      { url: "http://huiryong2.site/website02.html", name: "02" },
    ],
    img: "images/website.jpeg",
    text: "仮想サイトの制作",
  },
  {
    title: "app",
    links: [{ url: "", name: "01" }],
    img: "images/app.png",
    text: "ポケモン図鑑アプリ",
  },
  {
    title: "practice",
    links: [
      { url: "http://huiryong2.site/practice.html", name: "01" },
      { url: "https://github.com/huiryong", name: "github" },
    ],
    img: "images/practice.png",
    text: "その他",
  },
];

const Work = () => {
  return (
    <Wrapper id="work">
      <h2>WORK</h2>
      <Website>
        {WorkItems.map((item, index) => {
          return (
            <WorkItem
              key={index}
              title={item.title}
              links={item.links}
              img={item.img}
              text={item.text}
            />
          );
        })}
      </Website>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 150px 0;
  > h2 {
    text-align: center;
    font-size: 50px;
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    margin: 100px 0;
    > h2 {
      font-size: 40px;
      padding-bottom: 100px;
    }
  }
  @media (max-width: 375px) {
    margin: 80px 0;
    > h2 {
      font-size: 30px;
      padding-bottom: 80px;
    }
  }
`;

const Website = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export default Work;
