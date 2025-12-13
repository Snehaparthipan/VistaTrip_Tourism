import React from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";

export default function Tickets() {
  return (
    <div>
      <div>
        <Link><FaBuilding /> Hotals</Link>
        <Link><MdFlightTakeoff />Flights</Link>
        <Link><FaTrainSubway />Train</Link>
        <Link><IoCarSport />Cars</Link>
      </div>
    </div>
  )
}
