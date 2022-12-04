import { Container } from "./styles.gallery.js";
import FlexBox from "../Flex Box/flex.js";
import { useState } from "react";

export default function Gallery(props) {
  const [currentElement, setCurrentElement] = useState("none");

  const handleClick = (id) => {
    if (id === currentElement) {
      setCurrentElement("none");
    } else {
      setCurrentElement(id);
    }
  };

  return (
    <Container>
      {props.list.map((element) => {
        return (
          <FlexBox
            currentElement={currentElement}
            handleClick={handleClick}
            element={element}
            key={element.id}
          />
        );
      })}
    </Container>
  );
}
