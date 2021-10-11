import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/bganime3.png';

export const Style = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 10px 0;
  }

  h1 {
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 100px;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    text-shadow: 2px 2px #778899;
  }

  .fontChange {
    font-family: 'Zeyada', sans-serif;
  }

  .start,
  .next,
  .restart {
    cursor: pointer;
    padding: 15px 25px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #be93d4;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #7a4988;
    margin: 20px 0 20px;
  }

  .start:hover,
  .next:hover,
  .restart:hover {
    background-color: #e39ff6;
  }

  .start:active,
  .next:active,
  .restart:active {
    background-color: #9e7bb5;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
