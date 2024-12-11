import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Dropdown,
  Form,
  Table,
  Modal,
  Pagination,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AllTransactions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 9; // Set to 9 records per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/invoices");
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching invoices:", error.message);
      }
    };

    fetchInvoices();

    // Polling to fetch data periodically
    const interval = setInterval(fetchInvoices, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleEditTransaction = (transaction) => {
    navigate(`/edit-transaction/${transaction.invoiceNo}`, {
      state: { transaction },
    });
  };

  const handleDeleteTransaction = async () => {
    if (selectedTransaction) {
      try {
        await axios.delete(
          `http://localhost:8000/api/invoices/${selectedTransaction.invoiceNo}`
        );
        setTransactions((prev) =>
          prev.filter(
            (transaction) =>
              transaction.invoiceNo !== selectedTransaction.invoiceNo
          )
        );
      } catch (error) {
        console.error("Error deleting transaction:", error.message);
        alert("Failed to delete the transaction.");
      }
      setShowModal(false);
    }
  };

  const handleShowModal = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const invoiceNo = transaction.invoiceNo || "";
    const customerName = transaction.customerName || "";
    const status = transaction.status || "";

    return (
      invoiceNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const columnStyle = { width: "12.5%" };
  const columnStyle1 = { width: "17%" };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-3">
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

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th style={columnStyle}>Invoice No</th>
            <th style={columnStyle}>Customer Name </th>
            <th style={columnStyle1}>Date & Time</th>
            <th style={columnStyle}>Subtotal</th>
            <th style={columnStyle}>Discount</th>
            <th style={columnStyle}>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentTransactions.map((transaction, i) => (
            <tr key={transaction._id}>
              <td>{`INVO-${String(i + 1 + indexOfFirstTransaction).padStart(2, "0")}`}</td>
              <td>{transaction.customerName || "Unknown"}</td>
              <td>{`${transaction.date || "N/A"} ${transaction.time || "N/A"}`}</td>
              <td>{`LKR ${transaction.totals?.subtotal || 0}`}</td>
              <td>{`LKR ${transaction.totals?.totalDiscount || 0}`}</td>
              <td>{`LKR ${transaction.totals?.grandTotal || 0}`}</td>
              <td className="text-center">{transaction.status || "N/A"}</td>
              <td className="d-flex justify-content-center">
                <Dropdown drop="start">
                  <Dropdown.Toggle variant="secondary" size="sm">
                    <i className="bi bi-three-dots-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleEditTransaction(transaction)}>
                      <i className="bi bi-pencil-fill me-2"></i>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleShowModal(transaction)} className="text-danger">
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

      <div className="d-flex justify-content-end mt-3">
        <Pagination>
          <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
          {Array.from({ length: Math.ceil(filteredTransactions.length / transactionsPerPage) }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredTransactions.length / transactionsPerPage)}
          />
        </Pagination>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this transaction?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteTransaction}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AllTransactions;