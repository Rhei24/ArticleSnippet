import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
