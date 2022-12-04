import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0.6rem;
  flex-wrap: wrap;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
