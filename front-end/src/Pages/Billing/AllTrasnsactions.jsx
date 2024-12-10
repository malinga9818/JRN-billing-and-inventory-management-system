import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Dropdown,
  Form,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function AllTransactions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/invoices");
        setTransactions(response.data); //here backend send array of invoices
      } catch (error) {
        console.error("Error fetching invoices:", error.message);
      }
    };

    fetchInvoices();
  }, []);

  const handleEditTransaction = (transaction) => {
    console.log("Edit Transaction:", transaction);
    //edit functionality
  };

  const handleDeleteTransaction = (transactionId) => {
    console.log("Delete Transaction:", transactionId);
    // delete functionality
  };

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
          <Breadcrumb.Item active>All Transactions</Breadcrumb.Item>
        </Breadcrumb>
        <div className="position-relative mb-3">
          <Form.Control
            type="text"
            placeholder="Search transaction"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-80 rounded-md ps-5 border border-black-300"
          />
        </div>
      </div>

      <div style={{ maxHeight: "75vh", overflowY: "auto" }}>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Customer Name</th>
              <th>Date & Time</th>
              <th>No of Products</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, i) => (
              <tr key={transaction._id}>
                <td>{`INVO-${String(i + 1).padStart(2, "0")}`}</td>
                <td>{transaction.customerName}</td>
                <td>{`${transaction.date} ${transaction.time}`}</td>
                <td className="text-center">{transaction.products.length}</td>
                <td>{`LKR ${transaction.totals.grandTotal}`}</td>
                <td>{transaction.status}</td>
                <td>
                  <Dropdown drop="start">
                    <Dropdown.Toggle variant="secondary">
                      <i className="bi bi-three-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => handleEditTransaction(transaction)}
                      >
                        <i className="bi bi-pencil-fill me-2"></i>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDeleteTransaction(transaction._id)}
                        className="text-danger"
                      >
                        <i className="bi bi-trash-fill me-2"></i>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-end mt-2">
        <Button variant="primary">All Transactions</Button>
      </div>
    </div>
  );
}

export default AllTransactions;
