import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./SlidebarData";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [showbutton  , setShowbutton] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowbutton(true);
    navigate("/login");
  };

  const user = localStorage.getItem("token");

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div className="navbar-inner-container">
            {showbutton ? (
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Logout
              </button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={handleLogout}>
                Login
              </button>
            )}
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
