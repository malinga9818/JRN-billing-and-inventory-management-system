import React from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdowns from "../../Components/Dropdowns";

const summaryData = {
  // Dummy data
  timePeriod: "TODAY",
  sales: "17",
  revenue: "LKR 147,370",
  newCustomers: 15,
};

function BiilingSummary() {
  return (
    <div className="">
      <Breadcrumb className="flex items-center ml-10">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          JRN{" "}
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/billing" }}>
          Time Management
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="fs-5">
          Overview
        </Breadcrumb.Item>
      </Breadcrumb>

      <Card className="mx-12">
        <Row className="text-center  bg-slate-500 p-2 rounded-lg ">
          <Col style={{ borderRight: "1px solid #ddd" }}>
            <div className="rounded p-3 text-$indigo-200 flex items-center justify-center gap-3">
              <h5>
                <Dropdowns/>
              </h5>
            </div>
          </Col>
          <Col style={{ borderRight: "1px solid #ddd" }}>
            <div className="rounded p-3">
              <h5>Sales</h5>
              <p>{summaryData.sales}</p>
            </div>
          </Col>
          <Col style={{ borderRight: "1px solid #ddd" }}>
            <div className="rounded p-3">
              <h5>Revenue</h5>
              <p>{summaryData.revenue}</p>
            </div>
          </Col>
          <Col>
            <div className="rounded p-3">
              <h5>New Customers</h5>
              <p>{summaryData.newCustomers}</p>
            </div>
          </Col>
        </Row>
      </Card>
      <div className="flex justify-between items-center mx-10 mt-10 mb-2">
        <h5 className="text-blue-800">Recent Transactions</h5>
        <div className="flex gap-3 ">
          <Button variant="primary">Add New Invoice</Button>

          <Button variant="primary">View All Transactions</Button>
        </div>
      </div>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Customer Name</th>
            <th>Daye & Time</th>
            <th>No of products</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
}

export default BiilingSummary;
