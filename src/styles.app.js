import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

export const FlexRow = styled(Base)`
  flex: 1;
  gap: 0.6rem;
`;

export const FlexBox = styled(Base)`
  flex: 1;
  min-width: 25%;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    flex-grow: 2;
  }
`;
