import Search from "../Components/Search";
import { Routes, Route } from "react-router-dom";
import Flight from "./Flight";
import '../CSS/home.css'
import Hotals from "./Hotals";
import Train from "./Train";
import Cars from "./Cars";

export default function Home() {
  return (
    <div className="banner">
      <img
        className="ban"
        src="https://i.postimg.cc/q701gPnC/filip-bunkens-R5Srm-ZPo-O40-unsplash.jpg"
        alt=""
      />

      <div className="title-box">
        <h2 className="quote">Explore the Colourful World</h2>
        <div className="line"></div>
        <button className="ex-btn">Explore</button>
      </div>


      <Search />
      <Routes>
        <Route index element={<Flight />} />
        <Route path="hotel" element={<Hotals />} />
        <Route path="train" element={<Train />} />
        <Route path="car" element={<Cars />} />

      </Routes>
    </div>
  );
}
