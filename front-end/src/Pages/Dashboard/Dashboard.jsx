import React, { useState, useEffect } from "react";
import { Breadcrumb, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdowns from "../../Components/Dropdowns";
import Carousels from "./Carousels";
import Header from "../../Components/Header";
import axios from "axios";

const summaryData = {
  Sales: "12",
  Reports: "5",
  Out: 2,
};

const Dashboard = ({ setIsAuth }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/invoices");
        const sortedData = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setTransactions(sortedData.slice(0, 4)); 
      } catch (error) {
        console.error("Error fetching invoices:", error.message);
      }
    };

    fetchInvoices();

    const interval = setInterval(fetchInvoices, 5000); // this for fetch invoices every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-2">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            JRN
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex justify-content-end">
          <Header setIsAuth={setIsAuth} showSearch={false} />
        </div>
      </div>
      <Card className="mx-2">
        <Row className="text-center bg-light p-2 rounded-lg">
          <Col lg={3} md={6} sm={12}>
            <Card className="shadow-md rounded-lg p-4 transition-transform duration-200 hover:scale-105">
              <h4>
                <Dropdowns />
              </h4>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="shadow-md rounded-lg p-4 transition-transform duration-200 hover:scale-105">
              <h5 className="text-blue-600 font-semibold">Sales</h5>
              <p className="text-4xl font-bold">{summaryData.Sales}</p>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="shadow-md rounded-lg p-4 transition-transform duration-200 hover:scale-105">
              <h5 className="text-green-600 font-semibold">Reports</h5>
              <p className="text-4xl font-bold">{summaryData.Reports}</p>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="shadow-md rounded-lg p-4 transition-transform duration-200 hover:scale-105">
              <h5 className="text-yellow-600 font-semibold">Out Of Stock</h5>
              <p className="text-4xl font-bold">{summaryData.Out}</p>
            </Card>
          </Col>
        </Row>
      </Card>
      <Carousels />
      <h5 className="mt-4 mx-4">Recent Transactions</h5>
      <Row className="mt-4 mx-4">
        <Col lg={12}>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Invoice No</th>
                <th>Customer Name</th>
                <th>Date & Time</th>
                <th>Subtotal</th>
                <th>Discount</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, i) => (
                <tr key={transaction._id}>
                  <td>{`INVO-${String(i + 1).padStart(2, "0")}`}</td>
                  <td>{transaction.customerName || "Unknown"}</td>
                  <td>{`${transaction.date || "N/A"} ${transaction.time || "N/A"}`}</td>
                  <td>{`LKR ${transaction.totals?.subtotal || 0}`}</td>
                  <td>{`LKR ${transaction.totals?.totalDiscount || 0}`}</td>
                  <td>{`LKR ${transaction.totals?.grandTotal || 0}`}</td>
                  <td className="text-center">
                    {transaction.paymentStatus || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;