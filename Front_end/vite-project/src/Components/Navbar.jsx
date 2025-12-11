import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navleft">
        <h2 className="logo">TRAVEL</h2>
      </div>
      <nav className={`navcenter ${open ? "open" : ""}`}>
        <a href="#">Rewards</a>
        <a href="#">Discover</a>
        <a href="#">Trips</a>
        <a href="#">Review</a>
        <a href="#">More ▾</a>
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
  );
};

export default Navbar;
