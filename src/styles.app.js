import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;
