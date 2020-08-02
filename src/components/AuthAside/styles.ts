import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div<any>`
  position: fixed;
  z-index: 1000;
  right: ${props => props.open ? 0 : '-400px'};
  top: 0;
  width: 400px;
  height: 100%;
  background: #fff;
  transition: all 0.3s;
  box-sizing: border-box;
  padding: 0 15px;
  border-left: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;

  button {
    color: ${colors.primary};
    border: 0;
    background: transparent;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      margin-bottom: 20px;
      width: 100%;
      box-sizing: border-box;
      padding: 10px 15px;
      border: 0;
      border-bottom: 1px solid ${colors.primary};
    }

    button {
      background-color: ${colors.primary};
      color: #fff;
      padding: 10px 15px;
      border-radius: 4px;
      border: 0;
      font-weight: 700;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  strong {
    color: ${colors.primary};
    margin-bottom: 10px;
  }

  button {
    border-radius: 4px;
    border: 1px solid #f00;
    padding: 5px 10px;
    color: #f00;
    background: transparent;
    font-weight: 700;
  }
`
