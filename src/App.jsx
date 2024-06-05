import { green } from "@mui/material/colors";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Grown from "./components/Grown";
import Brand from "./components/Brand";
import Herogal from "./components/Herogal";
import Gridwork from "./components/Gridwork";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div
        style={{ width: "100vw", minHeight: "100vh", background: "#000000", overflowX : "hidden" }}
      >
        <div className=" header--image">
          <img src="/assets/pic3.png" />
        </div>
        <Header />
        <Hero />
        <About />
        <Events/>
        <Grown/>
        <Brand/>
        <Herogal/>
        <Gridwork/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
