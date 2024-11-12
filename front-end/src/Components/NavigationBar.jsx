import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <>
      <Nav className="flex flex-col justify-between p-3 bg-slate-200  h-screen">
        <div className="flex flex-col gap-12">
          <h5 className=" pt-6 text-2xl">JRN roofing</h5>
          <Nav.Link as={NavLink} to="/billing" activeClassName="active-link">
            Billing
          </Nav.Link>
          <Nav.Link as={NavLink} to="/inventory" activeClassName="active-link">
            Inventory
          </Nav.Link>
          <Nav.Link as={NavLink} to="/report" activeClassName="active-link">
            Reports
          </Nav.Link>
          <Nav.Link as={NavLink} to="/user" activeClassName="active-link">
            User
          </Nav.Link>
        </div>
        <div className="relative bottom-10 ">
          <Nav.Link as={NavLink} to="/setting" activeClassName="active-link">
            Setting
          </Nav.Link>
        </div>
      </Nav>
    </>
  );
}

export default NavigationBar;
