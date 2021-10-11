import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/page-turner.svg';

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
}

* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

`;

export const Wrapper = styled.div`
display: flex,
flex-direction: column;
align-items: center;
> p {
    color: #fff;

}

.score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
}

h1 {
    color: #fff; 
    font-family: 'Montserrat', sans-serif; 
    font-size: 100px; 
    font-weight: bold; 
    letter-spacing: -1px; 
    line-height: 1; 
    text-align: center;
    text-shadow: 2px 2px black;
}

.start, .next {
    cursor: pointer;
    padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #0492C2;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  margin: 20px 0;
}
.start, .next:hover {
    background-color: #48AAAD
}

.start, .next:active {
    background-color: #63C5DA;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

`;
