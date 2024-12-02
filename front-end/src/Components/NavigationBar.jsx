import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <>
      <Nav className="flex flex-col justify-between h-screen p-3 bg-slate-200">
        <div className="flex flex-col gap-12">
          <h5 className=" pt-6 text-2xl">
            <Link to={"/"}>JRN Roofing</Link>
          </h5>

          <Nav.Link as={NavLink} to="/billing" ClassName="active-link gg">
            Billing
          </Nav.Link>
          <Nav.Link as={NavLink} to="/inventory" ClassName="active-link">
            Inventory
          </Nav.Link>
          <Nav.Link as={NavLink} to="/report" ClassName="active-link">
            Reports
          </Nav.Link>
          <Nav.Link as={NavLink} to="/user" ClassName="active-link">
            User
          </Nav.Link>
        </div>
        <div className="relative bottom-10 ">
          <Nav.Link as={NavLink} to="/setting" ClassName="active-link">
            Setting
          </Nav.Link>
        </div>
      </Nav>
    </>
  );
}

export default NavigationBar;
