import React, { useState } from "react";
import { Card, Nav, Tab } from "react-bootstrap";

import BillingInvoice from "./BillingInvoice";
import BiilingSummary from "./BiilingSummary";
import Header from "../../Components/Header";

const BillingManagement = () => {
  const [activeKey, setActiveKey] = useState("BillingSummary");

  return (
    <div className="">
      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Card className="">
          <Card.Header className="py-3">
            <Nav variant="tabs" className="flex items-center justify-between">
                <div className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="BillingSummary">Overview</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="BillingInvoice">Invoice</Nav.Link>
                  </Nav.Item>
                </div>
                <div className="flex justify-content-end">
                  <Nav.Item>
                    <Header />
                  </Nav.Item>
                </div>

            </Nav>
          </Card.Header>

          <Card.Body className="h-full">
            <Tab.Content>
              <Tab.Pane eventKey="BillingSummary">
                <BiilingSummary setActiveKey={setActiveKey} />
                {/*here passing setActiveKey as a prop */}
              </Tab.Pane>
              <Tab.Pane eventKey="BillingInvoice">
                <BillingInvoice setActiveKey={setActiveKey} />
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>
    </div>
  );
};

export default BillingManagement;
