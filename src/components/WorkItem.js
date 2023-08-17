import React from "react";
import { styled } from "styled-components";

const WorkItem = ({ title, links, img, text }) => {
  return (
    <WorkItemStyle>
      <WorkItemContent>
        <h2>{title}</h2>
        {links.map((link, linkIndex) => (
          <a key={linkIndex} href={link.url}>
            {link.name}
          </a>
        ))}
        <img src={img} alt={title} />
        <p>{text}</p>
      </WorkItemContent>
    </WorkItemStyle>
  );
};

const WorkItemStyle = styled.div`
  background-color: pink;
`;

const WorkItemContent = styled.div`
  padding: 0 30px;
  width: 300px;
  position: relative;
  > h2 {
    text-align: center;
    padding: 40px 0;
  }
  > a {
    padding: 0 20px;
    color: black;
    font-size: 20px;
  }
  > img {
    margin: 30px auto;
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
    opacity: 0.7;
  }
  > p {
    width: 200px;
    position: absolute;
    top: 160px;
    left: 60px;
    color: white;
  }
`;
export default WorkItem;
