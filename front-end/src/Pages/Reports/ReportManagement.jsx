import React, { useState } from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function ReportManagement() {
  const [activeKey, setactiveKey] = useState("Page1");

  return (
    <div>
      <Tab.Container activeKey={activeKey} onSelect={(r)=>setactiveKey(r)}>
        <Card>
          <Card.Header>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="Page1"> 
                  Page1 
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Page2"> 
                  Page2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Page3"> 
                  Page3
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey="Page1">
                <Page1 setactiveKey={setactiveKey}/>
              </Tab.Pane>
              <Tab.Pane eventKey="Page2">
                <Page2 setactiveKey={setactiveKey}/>
              </Tab.Pane>
              <Tab.Pane eventKey="Page3">
                <Page3 setactiveKey={setactiveKey}/>
                </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>
    </div>
  );
}

export default ReportManagement;
