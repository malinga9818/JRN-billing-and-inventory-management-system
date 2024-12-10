import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { AiOutlineFileSearch } from "react-icons/ai";
import Dropdowns from "../../Components/Dropdowns";

const summaryData = {
  timePeriod: "TODAY",
  sales: "17",
  revenue: "LKR 147,370",
  newCustomers: 15,
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

function BillingSummary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/invoices");
        setTransactions(response.data); // Assuming backend sends an array of invoices
      } catch (error) {
        console.error("Error fetching invoices:", error.message);
      }
    };

    fetchInvoices();
  }, []);

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.invoiceNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            JRN
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/billing" }}>
            Billing
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Overview</Breadcrumb.Item>
        </Breadcrumb>
        <div className="position-relative mb-3">
          <Form.Control
            type="text"
            placeholder="search transaction"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-80 rounded-md ps-5 border border-black-300"
          />
        </div>
      </div>
      <Card className="mx-2">
        <Row className="text-center bg-light p-2 rounded-lg">
          <Col lg={3} md={6} sm={12}>
            <Card className="shadow-md rounded-lg p-4 transition-transform duration-200 hover:scale-105">
              <h5>
                <Dropdowns />
              </h5>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="shadow-md rounded-lg p-4 transition-transform duration-200 hover:scale-105">
              <h5 className="text-blue-600 font-semibold">Sales</h5>
              <p className="text-4xl font-bold">{summaryData.sales}</p>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="shadow-md rounded-lg p-4 transition-transform duration-200 hover:scale-105">
              <h5 className="text-green-600 font-semibold">Revenue</h5>
              <p class="text-4xl font-bold">{summaryData.revenue}</p>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="shadow-md rounded-lg p-4 transition-transform duration-200 hover:scale-105">
              <h5 className="text-yellow-600 font-semibold">New Customers</h5>
              <p className="text-4xl font-bold">{summaryData.newCustomers}</p>
            </Card>
          </Col>
        </Row>
      </Card>
      <div className="flex justify-between items-center mx-2 mt-10 mb-2">
        <h5 className="">Recent Transactions</h5>
        <div className="flex gap-3">
          <Button variant="primary"> New Invoice</Button>
        </div>
      </div>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Customer Name</th>
            <th>Date & Time</th>
            <th>No of Products</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, i) => (
            <tr key={transaction._id}>
              <td>{`INVO-${String(i + 1).padStart(2, "0")}`}</td>{" "}
              <td>{transaction.customerName}</td>
              <td>{`${transaction.date} ${transaction.time}`}</td>
              <td className="text-center">{transaction.products.length}</td>
              <td>{`LKR ${transaction.totals.grandTotal}`}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end mt-2">
        <Button variant="primary">All Transactions</Button>
      </div>
    </div>
  );
}

export default BillingSummary;
