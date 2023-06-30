import "./App.css";
// import About from "./components/about/About";
// import Header from "./components/header/Header";
import Article from "./components/article/Article";
import Announcement from "./components/announcement/Announcement";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex flex-column gap-5">
      <Announcement />
      <div>Announcement/Article divider</div>
      <Article />
    </div>
  );
}

export default App;
