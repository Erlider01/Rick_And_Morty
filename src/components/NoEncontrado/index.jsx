import React from "react";
import styled from "styled-components";

const Div = styled.div`
  /* height: 230px; */
  /* width: 1000px; */
  background-color: #00000052;
  border-radius: 10px;
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: right;
  box-shadow: 0px 0px 10px #faa4a4;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      #660202b7,
      #d82b2bb7,
      #8d1616b7,
      #470909b7,
      #ff0800b8,
      #810202b7,
      #b10505b7,
      #290101b7
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: glo 50s linear infinite;
  }
  @keyframes glo {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

const H2 = styled.h2`
  margin: 0.4rem 0.8rem;
  font-size: 1.2rem;
  color: white;
`;

export default function NoEncontrado(props) {
  return (
    <Div className="mensaje">
      <H2>{props.messange}</H2>
    </Div>
  );
}
