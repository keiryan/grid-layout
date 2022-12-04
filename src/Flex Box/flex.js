import { Flex, Anchor, TextContainer } from "./styles.flex.js";

export default function FlexBox(props) {
  return (
    <Flex
      backgroundPicture={props.element.link}
      // Default color is white
      backgroundColor={props.element.backgroundColor}
      currentElement={props.currentElement}
      element={props.element}
    >
      <Anchor href={"#"} onClick={() => props.handleClick(props.element.id)}>
        <TextContainer>{props.element.text}</TextContainer>
      </Anchor>
    </Flex>
  );
}
