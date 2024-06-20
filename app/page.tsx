"use client";

import { ImCancelCircle } from "react-icons/im";
import styled from "styled-components";

import { IoMdCheckmarkCircle } from "react-icons/io";

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.success.main};
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  padding: 10px;
  p {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;

export default function Home() {
  return (
    <main>
      <ImCancelCircle />
      <Title>Hello World hehe !!</Title>
      <Card>
        <p>Nepal</p>
        <IoMdCheckmarkCircle />
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore
          ea error eveniet neque porro saepe incidunt consequatur eaque
          quibusdam.
        </small>
      </Card>
    </main>
  );
}
