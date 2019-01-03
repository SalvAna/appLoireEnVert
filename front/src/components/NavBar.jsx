import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../App.css";
import list from "../assets/list.png";
import funnel from "../assets/funnel.png";
// import map from "../assets/map.png";
import menu from "../assets/menu.png";

// Julie : NavBar fixe footer

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-default navbar-fixed-bottom">

          <NavbarBrand href="/events">
            <img src={list} width="35" height="35" alt="list" />
          </NavbarBrand>

          <NavbarBrand href="/">
            <img src={funnel} width="30" height="30" alt="entonnoir" />
          </NavbarBrand>

          {/* <NavbarBrand href="/map">
            <img src={map} width="30" height="30" alt="map" />
          </NavbarBrand> */}

          <NavbarBrand href="/menu">
            <img src={menu} width="30" height="30" alt="menu" />
          </NavbarBrand>

        </Navbar>
      </div>
    );
  }
}