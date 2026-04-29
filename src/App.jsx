import "./layout.scss";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homepage/HomePage";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="content">
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;
