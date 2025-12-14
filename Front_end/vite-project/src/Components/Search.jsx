import { NavLink } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import "../CSS/search.css";

function Search() {
    return (
        <div className="search-wrapper">
            <div className="search-card1">
                <div className="navdiv">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav active" : "nav"}>
                        <MdFlightTakeoff /> Flights
                    </NavLink>

                    <NavLink to="/hotel" className={({ isActive }) => isActive ? "nav active" : "nav"}>
                        <FaBuilding /> Hotels & Homes
                    </NavLink>

                    <NavLink to="/train" className={({ isActive }) => isActive ? "nav active" : "nav"}>
                        <FaTrainSubway /> Trains
                    </NavLink>

                    <NavLink to="/car" className={({ isActive }) => isActive ? "nav active" : "nav"}>
                        <IoCarSport /> Cars
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Search;
