import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 700px){
    min-height:initial;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  padding:40px;
`