import styled from "styled-components";

export const TextContainer = styled.div`
  opacity: 0;
  margin: 1rem;
  padding: 4px;
  border-radius: 4px;
  color: #ffffff;
  transition: opacity 0.3s ease-in-out;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Flex = styled.div`
  display: flex;
  flex: ${(props) =>
    props.currentElement === props.element.id || props.currentElement === "none"
      ? "1"
      : "0.2"};
  min-width: 0;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  background-image: url(${(props) => props.backgroundPicture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  :hover {
    cursor: pointer;
    flex-grow: 2;
    ${TextContainer} {
      opacity: 1;
      transition-delay: 0.3s;
    }
  }

  @media (max-width: 768px) {
    max-height: ${(props) =>
      props.currentElement === props.element.id ||
      props.currentElement === "none"
        ? "100%"
        : "0px"};
  }
  transition: all 0.3s ease-in-out;
`;

export const Anchor = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  font-weight: bold;
  text-decoration: none;
`;
