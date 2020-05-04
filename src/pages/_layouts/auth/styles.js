import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  background: linear-gradient(-180deg, #313179,       #00917E);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 415px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.4); /* qual cor ? */
    border-radius: 11px;
    padding: 15px;
    margin: 50px 15px 15px;

    img.imgLogo {
      position:relative;
      top: -75px;
      width:150px;
      align-self: center;
      margin-bottom: -60px; /* Gambi */
    }


    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      height: 50px;
      margin-bottom: 15px;
      padding: 5px 15px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }
    }
    span {
      color: #C1C1CF;
      align-self: flex-start;
      margin: 0 0 10px 5px;
      font-weight: bold;
    }
    button {
      border: 0;
      border-radius: 4px;
      background: #313043;
      height: 50px;
      color: #fff;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#313043')};
      }
    }
    a {
      color: #fff;
      opacity: 0.7;
      margin-top: 15px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
