import React from 'react'
import Tickets from '../Components/Tickets'
import '../CSS/home.css'
export default function Home() {
  return (
    <div className='banner'>
      <img className='ban' src="https://i.postimg.cc/q701gPnC/filip-bunkens-R5Srm-ZPo-O40-unsplash.jpg" alt="" />
      {/* <h1>ADVENTURE</h1> */}
      <div className="title-box">
        <h2 className="quote">Explore the Colourful World</h2>
        <div className="line"></div>
        <button className='ex-btn'>Explore</button>
      </div>
      <Tickets />
    </div>
  )
}
