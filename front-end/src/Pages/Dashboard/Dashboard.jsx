// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = ({ setIsAuth }) => {
//   const navigate = useNavigate();

//   //  handle logout
//   const handleLogout = () => {
//     alert("Are you sure to log out..");
//     localStorage.removeItem("token"); // remove token from localStorage
//     setIsAuth(false); // Update the auth state in app.js
//     navigate("/sign-in", { replace: true }); // goes to signin oafe
//   };

//   return (
//     <div>
//       <h1>Welcome to the Dashboard</h1>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;

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
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdowns from "../../Components/Dropdowns";
import Carousels from "./Carousels";
import Header from "../../Components/Header";

const summaryData = {
  Sales: "17",
  Revenue: "LKR 147, 987.00",
  Average: "LKR 8 703.11",
  Out: 15,
};

const dummyTransaction = [
  {
    invoiceNo: "INV001",
    customerName: "John Doe",
    dateTime: "2024-12-01 10:30 AM",
    noOfItems: 3,
    amount: "LKR 15,000",
    status: "Paid",
  },
  {
    invoiceNo: "INV002",
    customerName: "Jane Smith",
    dateTime: "2024-12-01 11:45 AM",
    noOfItems: 5,
    amount: "LKR 25,000",
    status: "Pending",
  },
  {
    invoiceNo: "INV003",
    customerName: "Michael Brown",
    dateTime: "2024-11-30 02:00 PM",
    noOfItems: 2,
    amount: "LKR 7,500",
    status: "Paid",
  },
  {
    invoiceNo: "INV004",
    customerName: "Emily Johnson",
    dateTime: "2024-11-30 09:15 AM",
    noOfItems: 8,
    amount: "LKR 40,000",
    status: "Cancelled",
  },
  {
    invoiceNo: "INV005",
    customerName: "Chris Wilson",
    dateTime: "2024-12-01 03:30 PM",
    noOfItems: 4,
    amount: "LKR 20,000",
    status: "Paid",
  },
];

const Dashboard = ({ setIsAuth }) => {
  return (
    <div className="px-2">
      <div className="d-flex align-item-center justify-content-between mb-2">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            JRN{" "}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex justify-content-end">
          <Header setIsAuth={setIsAuth} showSearch={false} />
        </div>
      </div>

      <Card className="mx-4">
        <Row className="text-center bg-light p-2 rounded-lg ">
          <Col style={{ borderRight: "1px solid #ddd" }} lg={3}>
            <div className="rounded p-3 text-$indigo-200 flex items-center justify-center gap-3">
              <h5>
                <Dropdowns />
              </h5>
            </div>
          </Col>
          <Col style={{ borderRight: "1px solid #ddd" }} lg={2}>
            <div className="rounded p-3">
              <h5>Sales</h5>
              <p>{summaryData.Sales}</p>
            </div>
          </Col>
          <Col style={{ borderRight: "1px solid #ddd" }} lg={2}>
            <div className="rounded p-3">
              <h5>Revenue</h5>
              <p>{summaryData.Revenue}</p>
            </div>
          </Col>
          <Col style={{ borderRight: "1px solid #ddd" }} lg={2}>
            <div className="rounded p-3">
              <h5>Average order value</h5>
              <p>{summaryData.Average}</p>
            </div>
          </Col>
          <Col lg={2}>
            <div className="rounded p-3 ">
              <h5>Out Of Stock</h5>
              <p>{summaryData.Out}</p>
            </div>
          </Col>
        </Row>
      </Card>
      <Carousels />
      <h5 className="text-blue-800">Recent Transactions</h5>
      {/* <div className="d-flex justify-content-between"> */}

      <Row className="mt-4 d-flex justify-content-between">
        {/* Table Column */}
        <Col lg={10}>
          <Table bordered striped hover responsive>
            <thead>
              <tr>
                <th>Invoice No</th>
                <th>Customer Name</th>
                <th>Date & Time</th>
                <th>No of items</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyTransaction.map((trnsaction) => {
                return (
                  <tr key={trnsaction.invoiceNo}>
                    <td>{trnsaction.invoiceNo}</td>
                    <td>{trnsaction.customerName}</td>
                    <td>{trnsaction.dateTime}</td>
                    <td>{trnsaction.noOfItems}</td>
                    <td>{trnsaction.amount}</td>
                    <td>{trnsaction.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>

        {/* Button Column */}
        <Col lg={2}>
          <div className="d-flex flex-column gap-3">
            <Button variant="primary">Add New Invoice</Button>
            <Button variant="primary">View All Transactions</Button>
          </div>
        </Col>
      </Row>
    </div>
    // </div>
  );
};

export default Dashboard;
