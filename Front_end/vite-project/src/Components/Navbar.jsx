import React, { useState } from "react"
import { Link } from "react-router-dom";
import Home from "../Pages/Home";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="navbar">
      <div className="navleft">
        <table><tr><td><img src="https://i.postimg.cc/fWxcX2ZC/Untitled-design-removebg-preview.png" height={100} alt="" /></td><td><h2 className="logo" style={{fontFamily:"-apple-system"}}>VISTA TRIP</h2></td></tr></table>
      </div>
      <nav className={`navcenter ${open ? "open" : ""}`}>
       <Link to="/">Rewards</Link>
       <Link to="/">Discover</Link>
       <Link to="/">Trips</Link>
       <Link to="/">Review</Link>
       <Link to="/">More ▾</Link>
      </nav>
    

      <div className="navright">
        <span className="currency">USD</span>
        <button className="bookbtn">Book Your Trip</button>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar
