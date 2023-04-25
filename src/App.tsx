import { useState } from "react";
import "./App.css";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <nav>*-----NAVBAR-----*</nav>
      <main>*MAIN_CONTENT_PAGES*</main>
      <footer>*-----FOOTER-----*</footer>
    </>
  );
}

export default App;
