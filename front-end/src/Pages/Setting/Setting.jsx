// src/Pages/Setting/Setting.jsx
import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Setting() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply background and text color to the whole page locally
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";

    // Optional cleanup when component unmounts
    return () => {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    };
  }, [darkMode]);

  const buttonStyles = {
    padding: "10px 20px",
    backgroundColor: darkMode ? "#333" : "#ddd",
    color: darkMode ? "#fff" : "#000",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  };

  return (
    <div className="container">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          JRN
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Settings</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="p-4 mb-4">
        <Row className="mb-3">
          <Col>
            <h4 className="fw-bold">Appearance Settings</h4>
            <p>Toggle between dark and light mode for this page.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button style={buttonStyles} onClick={() => setDarkMode(!darkMode)}>
              Switch to {darkMode ? "Light" : "Dark"} Mode
            </Button>
          </Col>
        </Row>
      </Card>

      <Card className="p-4">
        <h5>Other Preferences</h5>
        <Form.Check type="switch" label="Enable notifications" />
        <Form.Check type="switch" label="Auto-sync data" />
      </Card>
    </div>
  );
}

export default Setting;
