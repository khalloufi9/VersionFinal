import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
function Nav() {
  const [click, setClick] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuthenticated(true);
    }
  }, [])
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            STARF
            <i className="fa fa-futbol-o"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/matches"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                MATCHES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/teams"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                TEAMS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                CONTACT US
              </NavLink>
            </li>
            {

              isAuthenticated ? <li className="nav-item">
                <a
                  href="/login"
                  activeclassname="active"
                  className="nav-links"
                  onClick={() => localStorage.removeItem("token")}
                >
                  Logout
                </a>
              </li> :
                <li className="nav-item">
                  <a
                    href="/login"
                    activeclassname="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    LOGIN
                  </a>
                </li>
            }

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
