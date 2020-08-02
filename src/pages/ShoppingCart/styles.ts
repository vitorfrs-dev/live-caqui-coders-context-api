import styled from 'styled-components';

export const Container = styled.div`
  width: 1172px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  main {
    width: 70%;
    background: #fff;
    border-radius: 4px;
  }

  aside {
    width: 30%;
    padding: 0 20px;
    box-sizing: border-box;

  }
`;

export const ProductTable = styled.table`
  width: 100%;
  th {
    font-weight: 700;
    text-align: left;
    padding: 20px 0;
    box-sizing: border-box;
  }
  
  td img {
    width: 100px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  width: 100%;

  input {
    margin: 0 5px;
    width: 60px;
    text-align: center;
  }

  button {
    border-radius: 50%;
    background: #333;
    color: #fff;
    width: 22px;
    height: 22px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
  }
`;

export const TotalArea = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
  h3 {
    font-weight: 400;
    font-size: 14px;
  }
  span {
    margin-top: 10px;
    font-size: 30px;
    font-weight: 700;
  }
`;

export const EmptyCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #444;

  h3 {
    margin-bottom: 15px;
  }

  img {
    width: 150px;
    margin-bottom: 20px;
  }
`;