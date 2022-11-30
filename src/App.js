import "./App.css";
import { Container, FlexBox, FlexRow } from "./styles.app.js";
import { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>

      <FlexBox name="red" backgroundColor="red"></FlexBox>
      <FlexBox name="white"></FlexBox>
      <FlexBox name="pink" backgroundColor="pink"></FlexBox>

      <FlexBox name="blue" backgroundColor="blue"></FlexBox>
      <FlexBox name="orange" backgroundColor="orange"></FlexBox>

    </Container>
  );
}
