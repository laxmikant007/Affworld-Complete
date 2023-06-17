import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./SlidebarData";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




export default function Navbar() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [showbutton, setShowbutton] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.clear();
    // console.log("logout");
    // setShowbutton(true);
    navigate("/login");
  };

  const auth = localStorage.getItem("user");

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div className="navbar-inner-container">
            <Link to="/">
              {/* <h1 className="navbar-logo">Affworld</h1> */}
              <AccountCircleIcon fontSize="large" style={{ color: 'white' }} />
              {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
              {/* <Button style={{marginRight:20 ,marginLeft:20}} variant="contained" color="success">Success</Button> */}
            </Link>
            {


              auth ? <>

                <span style={{ fontFamily: 'sans-serif', fontWeight: "700", fontSize: "22px", color: 'white' }}> ({JSON.parse(auth).firstName?.split(" ")[0]}) &nbsp;</span>

                <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>

              </>

                : (
                  <button type="button" className="btn btn-primary" onClick={handleClick}>Login </button>
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
