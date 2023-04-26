import "./App.css";
import Home from "./pages/Home";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <article className="c-app">
      <Navbar />
      <Home />
      <footer>*-----FOOTER-----*</footer>
    </article>
  );
}

export default App;
