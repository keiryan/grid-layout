import "./App.css";
import { Container } from "./styles.app.js";
import Gallery from "./Gallery/gallery.js";

const list = [
  {
    id: Math.random(),
    text: "Beach Rocks",
    backgroundColor: "red",
    link: "https://images.unsplash.com/photo-1669908750572-112a3e982409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: Math.random(),
    text: "Multi-Colored flowers",
    link: "https://images.unsplash.com/photo-1670038625718-ed2e9bddd774?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: Math.random(),
    text: "Mountains",
    backgroundColor: "pink",
    link: "https://images.unsplash.com/photo-1669986884742-87f61afc027d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80",
  },

  {
    id: Math.random(),
    text: "Sunflowers",
    backgroundColor: "blue",
    link: "https://images.unsplash.com/photo-1669837238989-fe14dd4eb7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: Math.random(),
    text: "Woman model posing",
    backgroundColor: "orange",
    link: "https://images.unsplash.com/photo-1670056863030-8d53a661eb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
  },

  {
    id: Math.random(),
    text: "Array of lights",
    backgroundColor: "lightblue",
    link: "https://images.unsplash.com/photo-1670072874273-8c1dd5d4af63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },

  {
    id: Math.random(),
    text: "Arieal footage of beach rocks",
    backgroundColor: "deeppink",
    link: "https://images.unsplash.com/photo-1669908750751-d75457162694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
];

export default function App() {
  return (
    <Container>
      <Gallery list={list} />
    </Container>
  );
}
