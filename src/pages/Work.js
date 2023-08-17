import React from "react";
import { styled } from "styled-components";
import WorkItem from "../components/WorkItem";

const WorkItems = [
  {
    title: "website",
    links: [
      { url: "http://httpbin.org/status/200", name: "01" },
      { url: "http://httpbin.org/json", name: "02" },
    ],
    img: "images/website.jpeg",
    text: "仮想サイトの制作",
  },
  {
    title: "app",
    links: [{ url: "", name: "01" }],
    img: "images/app.png",
    text: "Reactを用いたポケモン図鑑アプリ",
  },
  {
    title: "practice",
    links: [
      { url: "", name: "01" },
      { url: "", name: "02" },
    ],
    img: "images/practice.png",
    text: "その他模写やマークアップなど",
  },
];

const Work = () => {
  return (
    <Wrapper>
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
  margin: 150px;
  > h2 {
    text-align: center;
    font-size: 50px;
    padding-bottom: 100px;
  }
`;

const Website = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export default Work;
