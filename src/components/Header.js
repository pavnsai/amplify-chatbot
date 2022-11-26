import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/instagram.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Explore } from "../assets/explore.svg";
import { ReactComponent as Logout } from "../assets/logout.svg";
import { Auth } from "aws-amplify";
import "./header.css";
const Header = () => {
  const history = useNavigate();
  const handleClick = () => {
    history("/");
  };
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <nav>
      <div className="div-header">
        <div
          style={{
            width: "50%",
            padding: "0 0 0 0",
            margin: "0 0 0 0",
            marginLeft: "10%",
          }}
          onClick={() => history("/")}
        >
          <Logo style={{ height: "40px", width: "40px" }} />
        </div>
        <div
          style={{
            display: "flex",
            width: "50%",
            flexDirection: "row",
            alignItems: "right",
          }}
        >
          <div style={{ width: "25%" }}></div>
          <div style={{ width: "25%" }}>
            <NavLink
              to="/home"
              className={(nav) => (nav.isActive ? "active2" : "")}
            >
              <Home style={{ height: "40px", width: "40px" }} />
            </NavLink>
          </div>
          <div style={{ width: "25%" }}>
            <NavLink
              to="/chatbot"
              className={(nav) => (nav.isActive ? "active2" : "")}
            >
              <Explore style={{ height: "40px", width: "40px" }} />
            </NavLink>
          </div>
          <div style={{ width: "25%" }}>
            <NavLink onClick={signOut}>
              <Logout style={{ height: "40px", width: "40px" }} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
