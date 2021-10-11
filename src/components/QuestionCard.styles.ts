import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #fff;
  border-radiusL 10px;
  border: 2px solid #59788e;
  padding: 20px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
text-align: center;
font-family: 'Raleway', sans-serif;

  p {
font-size: 1rem;
  }


`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all -0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    user-select: none;
    cursor: pointer;
    font-size: 0.8rem;
    width: 100%;
    font-weight: bold;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff5656, #c16868)'
        : 'linear-gradient(90deg, #e2dafb, #a39efa)'};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
