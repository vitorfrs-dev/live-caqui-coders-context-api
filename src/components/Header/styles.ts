import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  background-color: ${colors.primary};

  div.inner-container {
    width: 100%;
    height: 100%;
    max-width: 1172px;
    box-sizing: border-border-box;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.span`
  a {
    color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  }
  
`;

export const BasketArea = styled.div`
  height: 100%;
  color: #fff;
  position: relative;
  padding: 10px;

  &:hover .basket-drop-down {
    display: block;
  }

  div.basket-drop-down {
    display: none;
    width: 250px;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #ddd;
    position: absolute;
    top: 50px;
    right: 10px;
    color: #333;
    box-sizing: border-box;
    padding: 0 10px;
  }
`;

export const BasketCounter = styled.div`
  width: 22px;
  height: 22px;
  font-size: 10px;
  border-radius: 50%;
  color:#fff;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 2px;
`;

export const BasketItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;


  img {
    width: 60px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      margin-bottom: 5px;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  background: rgba(255,255,255.1);
  margin: 0 15px;
  height: 50px;
`
export const BtnSignIn = styled.button`
  color: #444;
  background: #fff;
  border: 0;
  border-radius: 4px;
  padding: 10px 15px;
 `;

export const UserArea = styled.div`
  display: flex;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    &:hover {
      filter: grayscale(50%);
      cursor: pointer;
    }
  }
  div {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;

    strong {
      font-weight: 700;
    }    
  }
`;
