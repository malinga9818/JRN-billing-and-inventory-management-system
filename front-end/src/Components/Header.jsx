import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { Form } from "react-bootstrap";

function Header() {
  return (
    <div>
      <div className=" flex items-center gap-4 ">
      <Form.Control
          type="text"
          placeholder="Search "
          value={""}
          style={{ width: '400px', marginLeft: '20px' }} // Adjust styling for the search bar
        />
        <AiOutlineSearch />
        <IoIosNotificationsOutline />
        <CgProfile />
      </div>
    </div>
  );
}

export default Header;
