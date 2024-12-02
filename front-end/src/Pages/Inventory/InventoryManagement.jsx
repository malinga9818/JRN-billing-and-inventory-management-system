import React, { useState } from "react";
import { Card, Nav, Tab } from "react-bootstrap";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Product from "./Products";
import Header from "../../Components/Header";

function InventoryManagement({ setIsAuth }) {
  const [activeKey, setactiveKey] = useState("Products");

  return (
    <div>
      <Tab.Container activeKey={activeKey} onSelect={(r) => setactiveKey(r)}>
        <Card>
          <Card.Header>

            <Nav variant="tabs" className="flex items-center justify-between">
              <div className="d-flex">
                {" "}
                <Nav.Item>
                  <Nav.Link eventKey="Products">Page1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Product">Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Page3">Page3</Nav.Link>
                </Nav.Item>
                
              </div>
              <div className="flex justify-content-end">
                <Nav.Item>
                  <Header setIsAuth={setIsAuth} />
                </Nav.Item>
              </div>
              </Nav>
          <h3 className="text-center">Inventory Management</h3>          
            <Nav variant="tabs">              
              <Nav.Item>

                <Nav.Link eventKey="Page1"> 
                  Stock Details 
                </Nav.Link>

                <Nav.Link eventKey="Products">Page1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Product">Product</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Page3">Page3</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey="Products">
                <Product setactiveKey={setactiveKey} />
              </Tab.Pane>
              <Tab.Pane eventKey="Product">
                <Page1 setactiveKey={setactiveKey} />
              </Tab.Pane>
              <Tab.Pane eventKey="Page3">
                <Page3 setactiveKey={setactiveKey} />
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>
    </div>
  );
}

export default InventoryManagement;
