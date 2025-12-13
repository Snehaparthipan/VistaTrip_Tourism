import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import axios from 'axios'
import '../CSS/tickets.css'
export default function Tickets() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setList([]);
      return;
    }
    async function getFlight(){
      const res= await axios.get(`http://localhost:5000/api/flight/?q=${value}`)
      console.log(res.data)
      setList(res.data.data);
    }
  }
  //   const res = await fetch(
  //     `http://localhost:5000/api/flight/?q=${value}`
  //   );
  //   const data = await res.json();
  //   setList(res.data.data);
  // };
  return (
    <div>
      <h1>https://simple-tourism-organization.netlify.app/</h1>
      <div className='ticket'>
        <div className='navdiv'>
        <Link className='nav'><FaBuilding /> Hotals</Link>
        <Link className='nav'><MdFlightTakeoff />Flights</Link>
        <Link className='nav'><FaTrainSubway />Train</Link>
        <Link className='nav'><IoCarSport />Cars</Link>
        </div>
        <div className='input'>
        <input type="text" className='searchbox'value={query}
    onChange={handleChange} placeholder='Place to go, things to do,hotals...' />
        <button>search</button>

        

  {list.length > 0 && (
    <div className="dropdown">
      {list.map((item) => (
        <div
          key={item.cityCode}
          className="dropdown-item"
          onClick={() => {
            setQuery(`${item.city} (${item.cityCode})`);
            setList([]);
          }}
        >
          <strong>{item.city} ({item.cityCode})</strong>
          <p>{item.airportName}</p>
        </div>
      ))}
    </div>
  )}
      </div>

    </div>
    </div>
  )
}
