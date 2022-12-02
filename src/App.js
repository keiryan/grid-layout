import "./App.css";
import { Container, FlexBox } from "./styles.app.js";

export default function App() {
  return (
    <Container>
      <FlexBox backgroundColor="red"></FlexBox>
       {/* Default color is white */}
      <FlexBox></FlexBox>
      <FlexBox backgroundColor="pink"></FlexBox>

      <FlexBox backgroundColor="blue"></FlexBox>
      <FlexBox backgroundColor="orange"></FlexBox>
      <FlexBox backgroundColor="lightblue"></FlexBox>
      <FlexBox backgroundColor="deeppink"></FlexBox>
    </Container>
  );
}
