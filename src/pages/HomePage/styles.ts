import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 100px;
  h1 {
    font-size: 22px;
    font-weight: 400;
    margin: 20px 0;
  }
`;

export const GridArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
`

export const Card = styled.div`
  border-radius: 4px;
  height: 300px;
  background: #ddd;
`;