// import React from "react";
// import { Breadcrumb, Button, Col, Form, Row, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function BillingInvoice() {
//   const productData = [
//     {
//       category: "roofing",
//       product: "normal roofing",
//       gauge: "1.5",
//       color: "red",
//       qty: 10,
//       uPrice: "4500",
//       discount: 500,
//       total: 44500,
//     },
//   ];
//   return (
//     <div className="">
//       <div>
//         <Breadcrumb className="ml-8 flex items-center">
//           <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
//             JRN{" "}
//           </Breadcrumb.Item>
//           <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/billing" }}>
//             Time Management
//           </Breadcrumb.Item>
//           <Breadcrumb.Item active className="text-xl">
//             Invoice
//           </Breadcrumb.Item>
//         </Breadcrumb>
//       </div>

//       {/* <div style={{height:"300px", overflow:"scroll"}}> */}
//       <div>
//         <Form>
//           <div className="flex flex-col gap-4">
//             <div className="bg-slate-200 pt-2 pb-4 px-4 rounded-lg w-full">
//               <Row className="flex flex-col md:flex-row ">
//                 {/* <Col md={4}>
//               <Form.Group controlId="Name" className="flex w-60 items-center gap-2">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control as="select" name="type" required>
//                   <option value="">Select Task Type</option>
//                   <option value="Individual">Individual</option>
//                   <option value="Group">Group</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col> */}
//                 <p className="text-xl ">Customers Deatails</p>
//                 <Col md={4}>
//                   <Form.Group
//                     controlId="taskName"
//                     className="flex w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control type="text" name="name" required />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group
//                     controlId="taskName"
//                     className="flex w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>City</Form.Label>
//                     <Form.Control type="text" name="name" required />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group
//                     controlId="taskName"
//                     className="flex w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>Tel </Form.Label>
//                     <Form.Control type="text" name="name" required />
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </div>
//             <div className="bg-slate-200 pt-2 pb-4 px-4 rounded-lg w-full">
//               <Row className="flex flex-col md:flex-row mb-4">
//                 <p className="text-xl ">Product Deatails</p>
//                 <Col md={3}>
//                   <Form.Group
//                     controlId="category"
//                     className="flex justify-between w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>Category</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       required
//                       style={{ width: "150px" }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={3}>
//                   <Form.Group
//                     controlId="product"
//                     className="flex justify-between w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>Product</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       required
//                       style={{ width: "150px" }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={3}>
//                   <Form.Group
//                     controlId="gague"
//                     className="flex justify-between w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>Gague</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       required
//                       style={{ width: "150px" }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={3}>
//                   <Form.Group
//                     controlId="color"
//                     className="flex justify-between w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>Color </Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       required
//                       style={{ width: "150px" }}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row className="flex flex-col md:flex-row ">
//                 <Col md={3}>
//                   <Form.Group
//                     controlId="qty"
//                     className="flex justify-between w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>Qty</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       required
//                       style={{ width: "150px" }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={3}>
//                   <Form.Group
//                     controlId="unitPrice"
//                     className="flex justify-between w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>Unit Price</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       required
//                       style={{ width: "150px" }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={3}>
//                   <Form.Group
//                     controlId="discount"
//                     className="flex justify-between w-40 lg:w-60 items-center gap-2  "
//                   >
//                     <Form.Label>Discount</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       required
//                       style={{ width: "150px" }}
//                     />
//                   </Form.Group>
//                 </Col>

//                 <Col md={6}>
//                   <div className="flex  gap-3 justify-end mt-4 ">
//                     <Button variant="danger">Clear</Button>

//                     <Button variant="primary">Add</Button>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//             <div className="bg-slate-200 p-2">
//               <Table bordered hover striped responsive>
//                 <thead>
//                   <tr>
//                     <th>Category</th>
//                     <th>ProductName</th>
//                     <th>Gague</th>
//                     <th>Color</th>
//                     <th>Qty</th>
//                     <th>UnitPrice</th>
//                     <th>Discount</th>
//                     <th>Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {productData.map((product, index) => {
//                     return (
//                       <tr>
//                         <td>{product.category}</td>
//                         <td>{product.product}</td>
//                         <td>{product.gauge}</td>
//                         <td>{product.color}</td>
//                         <td>{product.qty}</td>
//                         <td>{product.uPrice}</td>
//                         <td>{product.discount}</td>
//                         <td>{product.total}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </Table>
//             </div>
//             <div className="bg-slate-200 flex justify-end gap-4 p-2">
//               <Button variant="primary" className="same-width-button">
//                 All Transactions
//               </Button>
//               <Button variant="primary" className="same-width-button">
//                 {" "}
//                 Notify owner
//               </Button>
//               <Button variant="primary" className="same-width-button">
//                 Preview
//               </Button>
//               <Button variant="danger" className="same-width-button">
//                 Clear
//               </Button>
//               <Button variant="primary" className="same-width-button">
//                 {" "}
//                 Genarate Invoice
//               </Button>
//             </div>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }

// // export default BillingInvoice;
// import React, { useState } from "react";
// import { Breadcrumb, Button, Col, Form, Row, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function BillingInvoice() {
//   // State to manage product details
//   const [productData, setProductData] = useState([]);
//   const [formData, setFormData] = useState({
//     customerName: "",
//     customerCity: "",
//     customerTel: "",
//     category: "",
//     product: "",
//     gauge: "",
//     color: "",
//     qty: "",
//     uPrice: "",
//     discount: "",
//   });

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const clearForm = () => {
//     setFormData({
//       customerName: "",
//       customerCity: "",
//       customerTel: "",
//       category: "",
//       product: "",
//       gauge: "",
//       color: "",
//       qty: "",
//       uPrice: "",
//       discount: "",
//     });
//   };

//   // Add product to table
//   const handleAddProduct = () => {
//     const { qty, uPrice, discount } = formData;
//     if (qty && uPrice && discount) {
//       const total = (Number(qty) * Number(uPrice)) ;
//       const total1 = total-(total* Number(discount)/100);

//       setProductData((prevData) => [...prevData, { ...formData, total1 }]);
//       // Clear form after adding
//       clearForm();
//     } else {
//       alert("Please fill all fields before adding.");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       {/* Breadcrumb */}
//       <Breadcrumb>
//         <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
//           JRN
//         </Breadcrumb.Item>
//         <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/billing" }}>
//           Time Management
//         </Breadcrumb.Item>
//         <Breadcrumb.Item active>Invoice</Breadcrumb.Item>
//       </Breadcrumb>

//       {/* Form */}
//       <Form>
//         <div className="mb-4">
//           <div className="p-3 bg-light rounded">
//             <h5>Customer Details</h5>
//             <Row className="g-3">
//               <Col md={4}>
//                 <Form.Group controlId="customerName">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter name"
//                     name="customerName"
//                     value={formData.customerName}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="customerCity">
//                   <Form.Label>City</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter city"
//                     name="customerCity"
//                     value={formData.customerCity}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="customerTel">
//                   <Form.Label>Tel</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter telephone"
//                     name="customerTel"
//                     value={formData.customerTel}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//           </div>
//         </div>

//         <div className="mb-4">
//           <div className="p-3 bg-light rounded">
//             <h5>Product Details</h5>
//             <Row className="g-3">
//               <Col md={3}>
//                 <Form.Group controlId="productCategory">
//                   <Form.Label>Category</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter category"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productName">
//                   <Form.Label>Product</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter product"
//                     name="product"
//                     value={formData.product}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productGauge">
//                   <Form.Label>Gauge</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter gauge"
//                     name="gauge"
//                     value={formData.gauge}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productColor">
//                   <Form.Label>Color</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter color"
//                     name="color"
//                     value={formData.color}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row className="g-3 mt-3">
//               <Col md={3}>
//                 <Form.Group controlId="productQty">
//                   <Form.Label>Qty</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter quantity"
//                     name="qty"
//                     value={formData.qty}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productUnitPrice">
//                   <Form.Label>Unit Price</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter unit price"
//                     name="uPrice"
//                     value={formData.uPrice}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productDiscount">
//                   <Form.Label>Discount</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter discount"
//                     name="discount"
//                     value={formData.discount}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col className="d-flex align-items-center justify-content-center mt-5">
//                 <div className="d-flex gap-2">
//                   <Button variant="danger" onClick={clearForm}>
//                     Clear
//                   </Button>
//                   <Button variant="primary" onClick={handleAddProduct}>
//                     Add
//                   </Button>
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </div>

//         <div className="mb-4">
//           <div className="p-3 bg-light rounded">
//             <h5>Product Table</h5>
//             <Table striped bordered hover responsive>
//               <thead>
//                 <tr>
//                   <th>Category</th>
//                   <th>Product Name</th>
//                   <th>Gauge</th>
//                   <th>Color</th>
//                   <th>Qty</th>
//                   <th>Unit Price</th>
//                   <th>Discount</th>
//                   <th>Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {productData.map((product, index) => (
//                   <tr key={index}>
//                     <td>{product.category}</td>
//                     <td>{product.product}</td>
//                     <td>{product.gauge}</td>
//                     <td>{product.color}</td>
//                     <td>{product.qty}</td>
//                     <td>{product.uPrice}</td>
//                     <td>{product.discount}</td>
//                     <td>{product.total1}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </div>

//         <div className="d-flex justify-content-end gap-3">
//           <Button variant="primary">All Transactions</Button>
//           <Button variant="primary">Notify Owner</Button>
//           <Button variant="primary">Preview</Button>
//           <Button variant="danger">Clear</Button>
//           <Button variant="primary">Generate Invoice</Button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default BillingInvoice;

// import React, { useState } from "react";
// import { Breadcrumb, Button, Col, Form, Row, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function BillingInvoice() {
//   // State to manage product details
//   const [productData, setProductData] = useState([]);
//   const [formData, setFormData] = useState({
//     customerName: "",
//     customerCity: "",
//     customerTel: "",
//     category: "",
//     product: "",
//     gauge: "",
//     color: "",
//     qty: "",
//     uPrice: "",
//     discount: "",
//     editIndex: null, // to keep track of the product being edited
//   });

//   // State for total calculations
//   const [totals, setTotals] = useState({
//     subtotal: 0,
//     totalDiscount: 0,
//     grandTotal: 0,
//   });

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const clearForm = () => {
//     setFormData({
//       category: "",
//       product: "",
//       gauge: "",
//       color: "",
//       qty: "",
//       uPrice: "",
//       discount: "",
//       editIndex: null, // reset the edit index
//     });
//   };

//   // Add or update product in the table
//   const handleAddOrUpdateProduct = (e) => {
//     const { qty, uPrice, discount, editIndex } = formData;
//     const totalBeforeDiscount = Number(qty) * Number(uPrice);
//     const total = totalBeforeDiscount - (totalBeforeDiscount * Number(discount)) / 100;

//     if (editIndex !== null) {
//       // If editing an existing product, update it
//       const updatedProductData = [...productData];
//       updatedProductData[editIndex] = { ...formData, total };
//       setProductData(updatedProductData);
//       calculateTotals(updatedProductData);
//     } else {
//       // Otherwise, add a new product
//       const newProductData = [
//         ...productData,
//         { ...formData, total },
//       ];
//       setProductData(newProductData);
//       calculateTotals(newProductData);
//     }

//     // Clear form after adding/updating
//     clearForm();
//   };

//   // Calculate totals dynamically
//   const calculateTotals = (products) => {
//     const updatedTotals = products.reduce(
//       (acc, product) => {
//         acc.subtotal += Number(product.qty) * Number(product.uPrice);
//         acc.totalDiscount += Number(product.discount)* Number(product.qty);
//         acc.grandTotal += product.total;
//         return acc;
//       },
//       { subtotal: 0, totalDiscount: 0, grandTotal: 0 }
//     );

//     setTotals(updatedTotals);
//   };

//   // Handle editing a product
//   const handleEditProduct = (index) => {
//     const product = productData[index];
//     setFormData({
//       ...product,
//       editIndex: index, // Set the index to edit
//     });
//   };

//   return (
//     <div className="container mt-4">
//       {/* Breadcrumb */}
//       <Breadcrumb>
//         <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
//           JRN
//         </Breadcrumb.Item>
//         <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/billing" }}>
//           Time Management
//         </Breadcrumb.Item>
//         <Breadcrumb.Item active>Invoice</Breadcrumb.Item>
//       </Breadcrumb>

//       {/* Form */}
//       <Form>
//         <div className="mb-4">
//           <div className="p-3 bg-light rounded">
//             <h5>Customer Details</h5>
//             <Row className="g-3">
//               <Col md={4}>
//                 <Form.Group controlId="customerName">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter name"
//                     name="customerName"
//                     value={formData.customerName}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="customerCity">
//                   <Form.Label>City</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter city"
//                     name="customerCity"
//                     value={formData.customerCity}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group controlId="customerTel">
//                   <Form.Label>Tel</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter telephone"
//                     name="customerTel"
//                     value={formData.customerTel}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//           </div>
//         </div>

//         <div className="mb-4">
//           <div className="p-3 bg-light rounded">
//             <h5>Product Details</h5>
//             <Row className="g-3">
//               <Col md={3}>
//                 <Form.Group controlId="productCategory">
//                   <Form.Label>Category</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter category"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productName">
//                   <Form.Label>Product</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter product"
//                     name="product"
//                     value={formData.product}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productGauge">
//                   <Form.Label>Gauge</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter gauge"
//                     name="gauge"
//                     value={formData.gauge}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productColor">
//                   <Form.Label>Color</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter color"
//                     name="color"
//                     value={formData.color}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row className="g-3 mt-3">
//               <Col md={3}>
//                 <Form.Group controlId="productQty">
//                   <Form.Label>Qty</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter quantity"
//                     name="qty"
//                     value={formData.qty}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productUnitPrice">
//                   <Form.Label>Unit Price</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter unit price"
//                     name="uPrice"
//                     value={formData.uPrice}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="productDiscount">
//                   <Form.Label>Discount</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter discount"
//                     name="discount"
//                     value={formData.discount}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col className="d-flex align-items-center justify-content-center mt-5">
//                 <div className="d-flex gap-2">
//                   <Button variant="danger" onClick={clearForm}>
//                     Clear
//                   </Button>
//                   <Button variant="primary" onClick={handleAddOrUpdateProduct}>
//                     {formData.editIndex !== null ? "Update" : "Add"}
//                   </Button>
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </div>

//         <div className="mb-4">
//           <div className="p-3 bg-light rounded">
//             <h5>Product Table</h5>
//             <Table bordered hover responsive>
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Category</th>
//                   <th>Product Name</th>
//                   <th>Gauge</th>
//                   <th>Color</th>
//                   <th>Qty</th>
//                   <th>Unit Price</th>
//                   <th>Discount</th>
//                   <th>Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {productData.map((product, index) => (
//                   <tr key={index} onClick={() => handleEditProduct(index)}>
//                     <td>{index + 1}</td>
//                     <td>{product.category}</td>
//                     <td>{product.product}</td>
//                     <td>{product.gauge}</td>
//                     <td>{product.color}</td>
//                     <td>{product.qty}</td>
//                     <td>{product.uPrice}</td>
//                     <td>{product.discount}</td>
//                     <td>{product.total}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </div>

//         <div className="mb-4">
//           <div className="p-3 bg-light rounded">
//             <h5>Invoice Summary</h5>
//             <div className="d-flex justify-content-between">
//               <div>
//                 <p>Subtotal: {totals.subtotal}</p>
//                 <p>Total Discount: {totals.totalDiscount}</p>
//               </div>
//               <div>
//                 <p>Grand Total: {totals.grandTotal}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="d-flex justify-content-end gap-3">
//           <Button variant="primary">All Transactions</Button>
//           <Button variant="primary">Notify Owner</Button>
//           <Button variant="primary">Preview</Button>
//           <Button variant="danger">Clear</Button>
//           <Button variant="primary">Generate</Button>
//         </div>

//       </Form>
//     </div>
//   );
// }

// export default BillingInvoice;

import React, { useState } from "react";
import { Breadcrumb, Button, Col, Form, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import InvoicePreview from "./InvoicePreview";

function BillingInvoice() {
  const [productData, setProductData] = useState([]);
  const [formData, setFormData] = useState({
    customerName: "",
    customerCity: "",
    customerTel: "",
    category: "",
    product: "",
    gauge: "",
    color: "",
    qty: "",
    uPrice: "",
    discount: "",
    editIndex: null, // to keep track of the product being edited
  });

  // state for total calculation
  const [totals, setTotals] = useState({
    subtotal: 0,
    totalDiscount: 0,
    grandTotal: 0,
  });
  // hanle form input change when add invoice data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      category: "",
      product: "",
      gauge: "",
      color: "",
      qty: "",
      uPrice: "",
      discount: "",
      editIndex: null, // this for reset the edit index
    });
  };

  // adding or update product in the table
  const handleAddOrUpdateProduct = (e) => {
    setShowDataTable(true);
    const { qty, uPrice, discount, editIndex } = formData;
    const totalBeforeDiscount = Number(qty) * Number(uPrice);
    const total =
      totalBeforeDiscount - (totalBeforeDiscount * Number(discount)) / 100;

    if (editIndex !== null) {
      // If editing an existing product the we can update it
      const updatedProductData = [...productData];
      updatedProductData[editIndex] = { ...formData, total };
      setProductData(updatedProductData);
      calculateTotals(updatedProductData);
    } else {
      // add a new product
      const newProductData = [...productData, { ...formData, total }];
      setProductData(newProductData);
      calculateTotals(newProductData);
    }
    clearForm();
  };
  // Calculate totals dynamically when add item continueously
  const calculateTotals = (products) => {
    const updatedTotals = products.reduce(
      (acc, product) => {
        acc.subtotal += Number(product.qty) * Number(product.uPrice);
        acc.totalDiscount += Number(product.discount) * Number(product.qty);
        acc.grandTotal += product.total;
        return acc;
      },
      { subtotal: 0, totalDiscount: 0, grandTotal: 0 }
    );

    setTotals(updatedTotals);
  };

  // this for andle editing a product
  const handleEditProduct = (index) => {
    const product = productData[index];
    setFormData({
      ...product,
      editIndex: index, // Set the index to edit
    });
  };
  //*********************************************************************** invoice preview */
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const handlePreviewClick = () => setShowInvoiceModal(true);
  const handleCloseModal = () => setShowInvoiceModal(false);

  const invoiceData = {
    customerName: formData.customerName,
    customerCity: formData.customerCity,
    customerTel: formData.customerTel,
    products: productData,
    totals,
  };
  //***************************************************************************** */
  // const handleGenerateInvoice = () => {
  //   const doc = new jsPDF();
  //   doc.text("Invoice", 20, 10);
  //   doc.autoTable({
  //     head: [
  //       [
  //         "#",
  //         "Category",
  //         "Product",
  //         "Gauge",
  //         "Color",
  //         "Qty",
  //         "Unit Price",
  //         "Discount",
  //         "Total",
  //       ],
  //     ],
  //     body: productData.map((p, i) => [
  //       i + 1,
  //       p.category,
  //       p.product,
  //       p.gauge,
  //       p.color,
  //       p.qty,
  //       p.uPrice,
  //       `${p.discount}%`,
  //       p.total,
  //     ]),
  //   });
  //   doc.text(`Subtotal: ${totals.subtotal.toFixed(2)}`, 14, 250);
  //   doc.text(`Total Discount: ${totals.totalDiscount.toFixed(2)}`, 14, 260);
  //   doc.text(`Grand Total: ${totals.grandTotal.toFixed(2)}`, 14, 270);
  //   doc.save("invoice.pdf");
  // };
  //***************************************************************************** */
  const clearAllData = () => {
    // this reset both the form data and product data and totals when click clear btn
    setFormData({
      customerName: "",
      customerCity: "",
      customerTel: "",
      category: "",
      product: "",
      gauge: "",
      color: "",
      qty: "",
      uPrice: "",
      discount: "",
      editIndex: null,
    });
    setProductData([]); // clear all product

    setTotals({
      subtotal: 0,
      totalDiscount: 0,
      grandTotal: 0,
    });
  };

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

  const [showDataTable, setShowDataTable] = useState(false);
  return (
    <div className="contar ">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          JRN
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/billing" }}>
          Billing
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Invoice</Breadcrumb.Item>
      </Breadcrumb>

      <Form className="px-2 ">
        <div className="border border-dark-opacity-50 rounded mb-4">
          <div className="p-3 bg-light rounded mb-4">
            <h5>Customer Details</h5>
            <Row className="g-3">
              <Col md={4}>
                <Form.Group controlId="customerName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="customerCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    name="customerCity"
                    value={formData.customerCity}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="customerTel">
                  <Form.Label>Tel</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter telephone"
                    name="customerTel"
                    value={formData.customerTel}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="p-3 bg-light mb-4">
            {" "}
            <h5>Product Details</h5>
            <Row className="g-3">
              {/* <Col md={3}>
                <Form.Group controlId="productCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col> */}
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    as="select"
                    value={formData.product}
                    name="product"
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a Product
                    </option>
                    {productNames.map((name, i) => (
                      <option key={i} value={name}>
                        {name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>

              {/* <Col md={3}>
                <Form.Group controlId="productColor">
                  <Form.Label>Color</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                  />
                </Form.Group> */}
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Color</Form.Label>
                  <Form.Control
                    as="select"
                    value={formData.color}
                    name="color"
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a Color
                    </option>
                    {colors.map((color, i) => (
                      <option key={i} value={color}>
                        {color}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Gauge</Form.Label>
                  <Form.Control
                    as="select"
                    value={formData.gauge}
                    name="gauge"
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a gauge
                    </option>
                    {gauges.map((gauge, i) => (
                      <option key={i} value={gauge}>
                        {gauge}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId="productQty">
                  <Form.Label>Qty</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter quantity"
                    name="qty"
                    value={formData.qty}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-3 mt-3">
              <Col md={3}>
                <Form.Group controlId="productUnitPrice">
                  <Form.Label>Unit Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter unit price"
                    name="uPrice"
                    value={formData.uPrice}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="productDiscount">
                  <Form.Label>Discount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter discount"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col className="d-flex align-items-center justify-content-end mt-5">
                <div className="d-flex gap-5">
                  <Button variant="danger" onClick={clearForm}>
                    Clear
                  </Button>
                  <Button variant="primary" onClick={handleAddOrUpdateProduct}>
                    {formData.editIndex !== null ? "Update" : "Add"}
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {showDataTable ? (
          <>
            <div className="mb-4">
              <div className="p-3 bg-light rounded">
                <h5>Product Table</h5>
                <Table bordered hover responsive>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product Name</th>
                      <th>Gauge</th>
                      <th>Color</th>
                      <th>Qty</th>
                      <th>Unit Price</th>
                      <th>Discount</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.map((product, index) => (
                      <tr key={index} onClick={() => handleEditProduct(index)}>
                        <td>{index + 1}</td>
                        <td>{product.product}</td>
                        <td>{product.gauge}</td>
                        <td>{product.color}</td>
                        <td>{product.qty}</td>
                        <td>{product.uPrice}</td>
                        <td>{product.discount}</td>
                        <td>{product.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="mb-4">
              <div className="p-3 bg-light rounded">
                <h5>Invoice Summary</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Subtotal: {totals.subtotal}</p>
                    <p>Total Discount: {totals.totalDiscount}</p>
                  </div>
                  <div>
                    <p>Grand Total: {totals.grandTotal}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <Button variant="primary">All Transactions</Button>
              <Button variant="primary">Notify Owner</Button>
              <Button variant="danger" onClick={clearAllData}>
                Clear
              </Button>
              <Button variant="primary" onClick={handlePreviewClick}>
                Generate
              </Button>
            </div>
            <div>
              {/* Invoice Preview Modal */}
              <InvoicePreview
                show={showInvoiceModal}
                handleClose={handleCloseModal}
                invoiceData={invoiceData}
              />
            </div>{" "}
          </>
        ) : null}
      </Form>
    </div>
  );
}

export default BillingInvoice;

