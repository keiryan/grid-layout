import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex: 1;
  min-width: 25%;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  background-image: url(${(props) => props.backgroundPicture});
  background-size: cover;
  background-position: center;
  :hover {
    cursor: pointer;
    flex-grow: 2;
  }
  transition: all 0.3s ease-in-out;
`;

export const Anchor = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  font-weight: bold;
  text-decoration: none;
`;

export const TextContainer = styled.div`
  width: 100%;
  padding: 4px 0.5rem;
  color: #ffffff;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
