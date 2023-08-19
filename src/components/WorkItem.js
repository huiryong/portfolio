import React from "react";
import { styled } from "styled-components";

const WorkItem = ({ title, links, img, text }) => {
  return (
    <WorkItemStyle>
      <WorkItemContent>
        <h2>{title}</h2>
        <p>{text}</p>
        {links.map((link, linkIndex) => (
          <a key={linkIndex} href={link.url}>
            {link.name}
          </a>
        ))}
        <img src={img} alt={title} />
      </WorkItemContent>
    </WorkItemStyle>
  );
};

const WorkItemStyle = styled.div`
  background-color: pink;
  height: 400px;
`;

const WorkItemContent = styled.div`
  padding: 0 30px;
  width: 300px;
  > h2 {
    text-align: center;
    padding-top: 40px;
    border-bottom: 1px black solid;
  }
  > a {
    padding: 0 20px;
    color: black;
    font-size: 20px;
  }
  > img {
    margin: 30px auto;
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    opacity: 0.7;
  }
  > p {
    text-align: center;
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 2;
  }
`;

export default WorkItem;
