import React, { useState } from "react";
import { Card, Nav, Tab } from "react-bootstrap";

import Header from "../../Components/Header";
import User from "./User";
import UserHandle from "./UserHandle";

function UsersManagement({ setIsAuth }) {
  const [activeKey, setactiveKey] = useState("UserHandle");

  return (
    <div>
      <Tab.Container activeKey={activeKey} onSelect={(r) => setactiveKey(r)}>
        <Card>
          <Card.Header>
            <Nav
              variant="tabs "
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex">
                <Nav.Item>
                  <Nav.Link eventKey="UserHandle">Users</Nav.Link>
                </Nav.Item>
              </div>
              <h3 className="text-center">User Management</h3>

              <div className="d-flex justify-content-end">
                <Nav.Item>
                  <Header setIsAuth={setIsAuth} />
                </Nav.Item>
              </div>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey="UserHandle">
                <UserHandle setactiveKey={setactiveKey} />
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>
    </div>
  );
}

export default UsersManagement;
