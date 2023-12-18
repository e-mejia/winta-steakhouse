import Home from "../src/components/Home";
import About from "../src/components/About";
import Menu from "../src/components/Menu";
import Gallery from "../src/components/Gallery";
import Contact from "../src/components/Contacts";
import News from "../src/components/News";

import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
