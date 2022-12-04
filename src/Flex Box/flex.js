import { Flex, Anchor, TextContainer } from "./styles.flex.js";

export default function FlexBox(props) {
  return (
    <Flex
      backgroundPicture={props.link}
      backgroundColor={props.backgroundColor}
    >
      <Anchor href={props.link}>
        <TextContainer>{props.text}</TextContainer>
      </Anchor>
    </Flex>
  );
}
