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
        <Route index path="/" element={<Home />} />
        {/* <Route path="/winta-steakhouse" element={<Home />} /> */}
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
