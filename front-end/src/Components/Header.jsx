import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Header({ showSearch = true,setIsAuth}) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token"); // Remove token from localStorage
      setIsAuth(false); // Update the auth state in app.js
      navigate("/sign-in", { replace: true }); // Redirect to sign-in page
    }
  };

  const handleProfileClick = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div>
      <div className="d-flex align-items-center gap-4">
        {showSearch && (
          <>
            <Form.Control
              type="text"
              placeholder="Search"
              value={""}
              className="w-50 ms-3" // Adjust styling with Bootstrap classes
            />
            <AiOutlineSearch size={20} />
          </>
        )}
        <IoIosNotificationsOutline size={25} />

        {/* Profile Icon with Dropdown */}
        <div className="position-relative">
          <CgProfile
            size={30}
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          />
          {/* Dropdown */}
          {isDropdownOpen && (
            <div
              className="dropdown-menu show"
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
                minWidth: "200px",
                zIndex: "1000",
              }}
            >
              <button
                className="dropdown-item"
                onClick={handleLogout}
                style={{
                  padding: "10px 20px",
                  textAlign: "left",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
