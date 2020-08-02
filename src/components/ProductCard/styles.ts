import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  border-radius: 4px;
  background: #fff;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 3px 5px #ddd;
  justify-content: flex-end;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
`;

export const Title = styled.span`
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
`;

export const Price = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: 0;
  background-color: ${colors.primary};
  padding: 15px;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background: #222;
  }
`;
