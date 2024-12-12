import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card,
    Dropdown,
    DropdownButton,
    Table,
    Button,
    Row,
    Col,
    Modal,
    Form,
    Alert,
    Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Page3() {
    const [showModal, setShowModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editableRowIndex, setEditableRowIndex] = useState(null);
    const [editRowData, setEditRowData] = useState(null);
    const [modalAction, setModalAction] = useState("");
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [orderSubmitAlert, setOrderSubmitAlert] = useState(false);
    const [addNewMaterialAlert, steAddNewMaterialAlert] = useState(false);



    const [orderForm, setOrderForm] = useState({
        supplierName: "",
        color: "Select Color",
        gauge: "Select Gauge",
        noOfCoils: "",
    });

    const [addMaterialForm, setAddMaterialForm] = useState({
        id: "",
        color: "Select Color",
        gauge: "Select Gauge",
        unit: "Select Unit",
        length: "",
        reorderLevel: "",
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedColor, setSelectedColor] = useState("All Colors");
    const [selectedGauge, setSelectedGauge] = useState("All Gauges");

    const colors = ["Autom Red", "Blue", "Chocolate Brown", "Green", "Meroon"];
    const gauges = ["0.47", "0.35", "0.30", "0.25", "0.20"];
    const units = ["Ft", "Nos"]

    const [stock, setStock] = useState([
        {
            id: "01",
            color: "Green",
            gauge: 0.47,
            unit: "Ft",
            length: "3000",
            reorderLevel: 1500,
        },
        {
            id: "02",
            color: "Blue",
            gauge: 0.35,
            unit: "Ft",
            length: "2850",
            reorderLevel: 1500,
        },
    ]);

    const filteredStock = stock.filter((item) => {
        return (
            (selectedColor === "All Colors" || item.color === selectedColor) &&
            (selectedGauge === "All Gauges" ||
                item.gauge === parseFloat(selectedGauge)) &&
            (item.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.id.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const handleOrderFormChange = (e) => {
        const { name, value } = e.target;
        setOrderForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleAddMaterialFormChange = (e) => {
        const { name, value } = e.target;
        setAddMaterialForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleEditFormChange = (e) => {
        const { name, value } = e.target;
        setEditRowData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (!orderForm.supplierName) {
            setAlertMessage("Please fill out the Supplier Name field.");
            setShowAlert(true);
            return false;
        }
        if (orderForm.color === "Select Color") {
            setAlertMessage("Please select a color.");
            setShowAlert(true);
            return false;
        }
        if (orderForm.gauge === "Select Gauge") {
            setAlertMessage("Please select a gauge.");
            setShowAlert(true);
            return false;
        }
        if (!orderForm.noOfCoils) {
            setAlertMessage("Please enter the number of coils.");
            setShowAlert(true);
            return false;
        }
        setShowAlert(false);
        return true;
    }
    const handleOrderSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setOrderSubmitAlert(true);
            setOrderForm({
                supplierName: "",
                color: "Select Color",
                gauge: "Select Gauge",
                noOfCoils: "",
            });
            setShowModal(false);
        }
    };



    const validateAddMetetialForm = () => {        
        if (addMaterialForm.color === "Select Color") {
            setAlertMessage("Please select a color.");
            setShowAlert(true);
            return false;
        }
        if (addMaterialForm.gauge === "Select Gauge") {
            setAlertMessage("Please select a gauge.");
            setShowAlert(true);
            return false;
        }
        if (addMaterialForm.unit === "Select Unit") {
            setAlertMessage("Please select a Unit.");
            setShowAlert(true);
            return false;
        }
        if (!addMaterialForm.length) {
            setAlertMessage("Please enter the length of coil.");
            setShowAlert(true);
            return false;
        }
        if (!addMaterialForm.reorderLevel) {
            setAlertMessage("Please enter the Re-order level of the material.");
            setShowAlert(true);
            return false;
        }
        setShowAlert(false);
        return true;
    }

    const handleAddMaterialSubmit = (e) => {
        e.preventDefault();
        
        if (validateAddMetetialForm()) {
        steAddNewMaterialAlert(true);
        setAddMaterialForm({
            id: "",
            color: "Select Color",
            gauge: "Select Gauge",
            unit: "Select Unit",
            length: "",
            reorderLevel: "",
        });
        setStock((prevStock) => [...prevStock, { ...addMaterialForm, id: uuidv4() }]);
        setShowAddModal(false);
    }
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setStock((prevStock) =>
            prevStock.map((item, index) =>
                index === editableRowIndex ? editRowData : item
            )
        );
        setShowEditModal(false);
    };

    const handleDeleteRow = (action, item = null) => {
        if (action === "Delete") {
            setItemToDelete(item);
            setShowDeleteConfirm(true);
        }
    };


    return (
        <div className="px-3">
            <div className="d-flex align-items-center justify-content-between">
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        JRN
                    </Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/inventory" }}>
                        Inventory
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Raw Materials</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className="text-center">Inventory Management</h3>

                <div className="mb-3 position-relative">
                    <Form.Control
                        type="text"
                        placeholder="Search.."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border rounded-md w-80"
                    />
                </div>
            </div>

            <div>
                <Card className="mx-2 mb-3">
                    <Row className="justify-around p-2 text-center rounded-lg bg-light d-flex">
                        <Col lg={3} md={6} sm={12}>
                            <Card
                                border="info"
                                className="p-4 transition-transform duration-200 rounded-lg shadow-md cursor-pointer h-100 hover:scale-105"
                                onClick={() => setShowModal(true)}
                            >
                                <h5 className="font-semibold text-blue-600">Place a New Order</h5>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>

            <div>
                <h5 className="mb-3">Available Materials</h5>
                <div className="gap-2 mb-4 d-flex">
                    <DropdownButton
                        id="color-dropdown"
                        title={selectedColor}
                        onSelect={(color) => setSelectedColor(color)}
                    >
                        <Dropdown.Item eventKey="All Colors">All Colors</Dropdown.Item>
                        {colors.map((color, index) => (
                            <Dropdown.Item key={index} eventKey={color}>
                                {color}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <DropdownButton
                        id="gauge-dropdown"
                        title={selectedGauge}
                        onSelect={(gauge) => setSelectedGauge(gauge)}
                    >
                        <Dropdown.Item eventKey="All Gauges">All Gauges</Dropdown.Item>
                        {gauges.map((gauge, index) => (
                            <Dropdown.Item key={index} eventKey={gauge}>
                                {gauge}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Coil Id</th>
                            <th>Color</th>
                            <th>Gauge</th>
                            <th>Unit</th>
                            <th>Available Length</th>
                            <th>Re-Order Level</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStock.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.color}</td>
                                <td>{item.gauge}</td>
                                <td>{item.unit}</td>
                                <td>{item.length}</td>
                                <td>{item.reorderLevel}</td>
                                <td>
                                    <Button
                                        variant="success"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => {
                                            setEditRowData(item);
                                            setEditableRowIndex(index);
                                            setShowEditModal(true);
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDeleteRow("Delete", item)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <div className="gap-2 d-flex justify-content-end">
                    <Button variant="primary" onClick={() => setShowAddModal(true)}>
                        Add Material
                    </Button>
                </div>

            </div>





            {/* Place Order Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Place a New Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {showAlert && (
                        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                            <strong>Warning:</strong> {alertMessage}
                        </Alert>
                    )}                    

                    <Form>

                        <Form.Group controlId="supplierName" className="mb-3">
                            <Form.Label>Supplier Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter supplier name"
                                name="supplierName"
                                value={orderForm.supplierName}
                                onChange={handleOrderFormChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="color" className="mb-3">
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                as="select"
                                name="color"
                                value={orderForm.color}
                                onChange={handleOrderFormChange}
                                required
                            >
                                <option disabled>Select Color</option>
                                {colors.map((color, index) => (
                                    <option key={index} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="gauge" className="mb-3">
                            <Form.Label>Gauge</Form.Label>
                            <Form.Control
                                as="select"
                                name="gauge"
                                value={orderForm.gauge}
                                onChange={handleOrderFormChange}
                                required
                            >
                                <option disabled>Select Gauge</option>
                                {gauges.map((gauge, index) => (
                                    <option key={index} value={gauge}>
                                        {gauge}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="noOfCoils" className="mb-3">
                            <Form.Label>Number of Coils</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number of coils"
                                name="noOfCoils"
                                value={orderForm.noOfCoils}
                                onChange={handleOrderFormChange}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {setShowModal(false); setShowAlert(false);}}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleOrderSubmit}>
                        Place Order
                    </Button>
                </Modal.Footer>

            </Modal>





            {/* Add Material Modal */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Material</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                 {showAlert && (
                        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                            <strong>Warning:</strong> {alertMessage}
                        </Alert>
                    )}  
                    
                    {modalAction === "Delete" ? (
                        <p>Are you sure you want to delete this product?</p>
                    ) : (
                        <Form >
                            <Form.Group controlId="color" className="mb-3">
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="color"
                                    value={addMaterialForm.color}
                                    onChange={handleAddMaterialFormChange}
                                    required
                                >
                                    <option disabled>Select Color</option>
                                    {colors.map((color, index) => (
                                        <option key={index} value={color}>
                                            {color}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="gauge" className="mb-3">
                                <Form.Label>Gauge</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="gauge"
                                    value={addMaterialForm.gauge}
                                    onChange={handleAddMaterialFormChange}
                                    required
                                >
                                    <option disabled>Select Gauge</option>
                                    {gauges.map((gauge, index) => (
                                        <option key={index} value={gauge}>
                                            {gauge}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="unit" className="mb-3">
                                <Form.Label>Unit</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="unit"
                                    value={addMaterialForm.unit}
                                    onChange={handleAddMaterialFormChange}
                                    required
                                >
                                    <option disabled>Select Unit</option>
                                    {units.map((unit, index) => (
                                        <option key={index} value={unit}>
                                            {unit}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="length" className="mb-3">
                                <Form.Label>Available Length</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter length"
                                    name="length"
                                    value={addMaterialForm.length}
                                    onChange={handleAddMaterialFormChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="reorderLevel" className="mb-3">
                                <Form.Label>Re-Order Level</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter re-order level"
                                    name="reorderLevel"
                                    value={addMaterialForm.reorderLevel}
                                    onChange={handleAddMaterialFormChange}
                                    required
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {setShowAddModal(false); setShowAlert(false);}}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleAddMaterialSubmit}>
                        Add Material
                    </Button>
                </Modal.Footer>
            </Modal>




            {/* Update Material Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Material</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group controlId="color" className="mb-3">
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                as="select"
                                name="color"
                                value={editRowData?.color || ""}
                                onChange={handleEditFormChange}
                                required
                            >
                                <option disabled>Select Color</option>
                                {colors.map((color, index) => (
                                    <option key={index} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="gauge" className="mb-3">
                            <Form.Label>Gauge</Form.Label>
                            <Form.Control
                                as="select"
                                name="gauge"
                                value={editRowData?.gauge || ""}
                                onChange={handleEditFormChange}
                                required
                            >
                                <option disabled>Select Gauge</option>
                                {gauges.map((gauge, index) => (
                                    <option key={index} value={gauge}>
                                        {gauge}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="unit" className="mb-3">
                            <Form.Label>Unit</Form.Label>
                            <Form.Control
                                as="select"
                                name="unit"
                                value={editRowData?.unit || ""}
                                onChange={handleEditFormChange}
                                required
                            >
                                <option disabled>Select Unit</option>
                                {units.map((unit, index) => (
                                    <option key={index} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="length" className="mb-3">
                            <Form.Label>Available Length</Form.Label>
                            <Form.Control
                                type="number"
                                name="length"
                                value={editRowData?.length || ""}
                                onChange={handleEditFormChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="reorderLevel" className="mb-3">
                            <Form.Label>Re-Order Level</Form.Label>
                            <Form.Control
                                type="number"
                                name="reorderLevel"
                                value={editRowData?.reorderLevel || ""}
                                onChange={handleEditFormChange}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleEditSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>




            <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this item?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            setStock((prevStock) => prevStock.filter((stockItem) => stockItem.id !== itemToDelete.id));
                            setShowDeleteConfirm(false);
                        }}
                    >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>



            <Modal show={orderSubmitAlert} onHide={() => setOrderSubmitAlert(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Order Submit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Order sent to the supplier successfully..!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setOrderSubmitAlert(false)}>
                        OK
                    </Button>
                   
                </Modal.Footer>
            </Modal>


        </div>
    );
}

export default Page3;
