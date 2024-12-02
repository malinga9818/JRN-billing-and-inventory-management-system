import React, { useState } from "react";
import {
  Card,
  Dropdown,
  DropdownButton,
  Table,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid"; // Install using `npm install uuid`

const Page1 = () => {
  const [selectedColor, setSelectedColor] = useState("All Colors");
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(""); // "Add", "Update", or "Delete"
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    qty: "",
    unit: "",
    color: "",
    gauge: "",
    reorderLevel: "",
  });
  const [stock, setStock] = useState([
    {
      id: "01",
      name: "Sample Data",
      qty: 1500,
      unit: "Ft",
      color: "Blue",
      gauge: "0.47",
      reorderLevel: 500,
    },
    {
      id: "02",
      name: "Sample Data",
      qty: 0,
      unit: "Ft",
      color: "Autom Red",
      gauge: "0.35",
      reorderLevel: 200,
    },
    {
      id: "03",
      name: "Sample Data",
      qty: 250,
      unit: "Nos",
      color: "Green",
      gauge: "0.30",
      reorderLevel: 100,
    },
    {
      id: "04",
      name: "Sample Data",
      qty: 0,
      unit: "Ft",
      color: "Chocolate Brown",
      gauge: "0.25",
      reorderLevel: 300,
    },
  ]);
  const [duplicateError, setDuplicateError] = useState("");

  const productNames = [
    "Normal Roofing",
    "Tile Roofing",
    "Gutter",
    "Barge Flashing",
    "Down Pipe",
    "Ridge Cover",
    "Valley Gutter",
    "Valance Board",
    "Wall Flashing",
    "Nozzles",
    "End Cap",
    "Bracket",
  ];
  const units = ["Ft", "Nos"];
  const colors = ["Autom Red", "Blue", "Chocolate Brown", "Green", "Meroon"];
  const gauges = ["0.47", "0.35", "0.30", "0.25", "0.20"];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleModalOpen = (action, item = null) => {
    setModalAction(action);
    if (action === "Add") {
      setFormData({
        id: uuidv4(),
        name: "",
        qty: "",
        unit: "",
        color: "",
        gauge: "",
        reorderLevel: "",
      });
    } else if (action === "Update") {
      setFormData(item);
    } else if (action === "Delete") {
      setFormData(item);
    }
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setDuplicateError("");
  };

  const handleFormSubmit = () => {
    // Check for duplicates
    const isDuplicate = stock.some(
      (item) =>
        item.name === formData.name &&
        item.color === formData.color &&
        item.gauge === formData.gauge &&
        item.id !== formData.id // Allow updating the same item without flagging as duplicate
    );

    if (isDuplicate) {
      setDuplicateError(
        "A product with the same name, color  and gauge already exists!"
      ); // Replace with a better UI error if needed
      return; // Stop the form submission
    }

    setDuplicateError("");
    if (modalAction === "Add") {
      setStock([...stock, formData]);
    } else if (modalAction === "Update") {
      setStock(
        stock.map((item) => (item.id === formData.id ? { ...formData } : item))
      );
    } else if (modalAction === "Delete") {
      setStock(stock.filter((item) => item.id !== formData.id));
    }

    handleModalClose();
  };

  const filteredStock =
    selectedColor === "All Colors"
      ? stock
      : selectedColor === "Out Of Stocks"
      ? stock.filter((item) => item.qty === 0) // Filter out of stock items
      : selectedColor === "Re-Order Items"
      ? stock.filter((item) => item.qty < item.reorderLevel) // Filter items below reorder level
      : stock.filter((item) => item.color === selectedColor); // Default to color filter

  // Count items below reorder level
  const reorderCount = stock.filter(
    (item) => item.qty < item.reorderLevel
  ).length;

  // Count items out of stock (qty = 0)
  const outOfStockCount = stock.filter((item) => item.qty === 0).length;

  const handleCardClick = (type) => {
    if (type === "Out Of Stocks") {
      setSelectedColor("Out Of Stocks"); // Filter by out-of-stock items
    } else if (type === "Re-Order Items") {
      setSelectedColor("Re-Order Items"); // Filter by reorder items
    } else {
      setSelectedColor("All Colors"); // Reset to show all colors
    }
  };

  return (
    <div className="p-3">
      {/* Inventory Summary */}
      <div className="mb-4 text-center d-flex justify-content-evenly">
        <Card
          border="info"
          style={{
            width: "15rem",
            backgroundColor: "#64748b",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => handleCardClick("Out Of Stocks")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#688f9b")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#64748b")
          }
        >
          <Card.Body>
            <Card.Title>Out Of Stocks</Card.Title>
            <Card.Subtitle>
              {stock.filter((item) => item.qty === 0).length}
            </Card.Subtitle>{" "}
            {/* Display out of stock count */}
          </Card.Body>
        </Card>

        <Card
          border="info"
          style={{
            width: "15rem",
            backgroundColor: "#64748b",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => handleCardClick("Re-Order Items")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#688f9b")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#64748b")
          }
        >
          <Card.Body>
            <Card.Title>Re-Order Items</Card.Title>
            <Card.Subtitle>
              {stock.filter((item) => item.qty < item.reorderLevel).length}
            </Card.Subtitle>{" "}
            {/* Display reorder count */}
          </Card.Body>
        </Card>

        <Card
          border="info"
          style={{ width: "15rem", backgroundColor: "#64748b", color: "#fff" }}
          onClick={() => handleCardClick("Value Of Stocks")}
        >
          <Card.Body>
            <Card.Title>Value Of Stocks</Card.Title>
            <Card.Subtitle>00</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>

      {/* Stock Table */}
      <div>
        <h2 className="mb-3">Available Stock</h2>
        <DropdownButton
          id="color-dropdown"
          title={selectedColor === "All Colors" ? "All Colors" : selectedColor}
          className="mb-3"
          onSelect={handleColorChange}
        >
          <Dropdown.Item eventKey="All Colors">All Colors</Dropdown.Item>
          {colors.map((color, index) => (
            <Dropdown.Item key={index} eventKey={color}>
              {color}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Color</th>
              <th>Gauge</th>
              <th>Re-Order Level</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.unit}</td>
                <td>{item.color}</td>
                <td>{item.gauge}</td>
                <td>{item.reorderLevel}</td>
                <td>
                  <Button
                    variant="success"
                    size="sm"
                    className="me-2"
                    onClick={() => handleModalOpen("Update", item)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleModalOpen("Delete", item)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="gap-2 d-flex justify-content-end">
          <Button variant="primary" onClick={() => handleModalOpen("Add")}>
            Add new product
          </Button>
        </div>
      </div>

      {/* Render Toast for Error */}
      {duplicateError && (
        <div
          className="p-3 position-fixed top-20 start-50 translate-middle"
          style={{ zIndex: 2000 }}
        >
          <div className="text-white toast show bg-danger">
            <div className="toast-body">{duplicateError}</div>
          </div>
        </div>
      )}

      {/* Modal for Add/Update/Delete */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalAction} Stock Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product ID</Form.Label>
              <Form.Control type="text" value={formData.id} readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                as="select"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                disabled={modalAction === "Delete"}
              >
                <option value="" disabled>
                  Select a Product
                </option>
                {productNames.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                value={formData.qty}
                onChange={(e) =>
                  setFormData({ ...formData, qty: e.target.value })
                }
                disabled={modalAction === "Delete"}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Unit</Form.Label>
              <Form.Control
                as="select"
                value={formData.unit}
                onChange={(e) =>
                  setFormData({ ...formData, unit: e.target.value })
                }
                disabled={modalAction === "Delete"}
              >
                <option value="" disabled>
                  Select a Unit
                </option>
                {units.map((unit, index) => (
                  <option key={index} value={unit}>
                    {unit}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                as="select"
                value={formData.color}
                onChange={(e) =>
                  setFormData({ ...formData, color: e.target.value })
                }
                disabled={modalAction === "Delete"}
              >
                <option value="" disabled>
                  Select a Color
                </option>
                {colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gauge</Form.Label>
              <Form.Control
                as="select"
                value={formData.gauge}
                onChange={(e) =>
                  setFormData({ ...formData, gauge: e.target.value })
                }
                disabled={modalAction === "Delete"}
              >
                <option value="" disabled>
                  Select a gauge
                </option>
                {gauges.map((gauge, index) => (
                  <option key={index} value={gauge}>
                    {gauge}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Re-Order Level</Form.Label>
              <Form.Control
                type="text"
                value={formData.reorderLevel}
                onChange={(e) =>
                  setFormData({ ...formData, reorderLevel: e.target.value })
                }
                disabled={modalAction === "Delete"}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="gap-2 d-flex">
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            {modalAction}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Page1;
