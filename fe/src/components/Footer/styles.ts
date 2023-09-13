// npm install @types/styled-components

import { styled } from "styled-components";

export const Container = styled.header`
background: #38761d;
display: flex;
justify-content: space-between;
align-items: center;
height: 120px;
width: 100%;
position: fixed;
bottom: 0;
left: 0;
padding: 0 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 40px;
  font-size: 50px;
  color: #fff;
  justify-content: flex-end;

  svg {
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #051dfa;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1800px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #080708;
      font-size: 20px;
    }

    h2 {
      color: #080708;
      font-weight: 400;
      font-size: 14px;
      margin-top: 6px;
    }
  }
`;