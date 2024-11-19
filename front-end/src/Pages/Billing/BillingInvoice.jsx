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

// export default BillingInvoice;

import React from "react";
import { Breadcrumb, Button, Col, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function BillingInvoice() {
  const productData = [
    {
      category: "roofing",
      product: "normal roofing",
      gauge: "1.5", 
      color: "red",
      qty: 10,
      uPrice: "4500",
      discount: 500,
      total: 44500,
    },
  ];

  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          JRN
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/billing" }}>
          Time Management
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Invoice</Breadcrumb.Item>
      </Breadcrumb>

      {/* Form */}
      <Form>
        <div className="mb-4">
          <div className="p-3 bg-light rounded">
            <h5>Customer Details</h5>
            <Row className="g-3">
              <Col md={4}>
                <Form.Group controlId="customerName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="customerCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter city" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="customerTel">
                  <Form.Label>Tel</Form.Label>
                  <Form.Control type="text" placeholder="Enter telephone" />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </div>

        <div className="mb-4">
          <div className="p-3 bg-light rounded">
            <h5>Product Details</h5>
            <Row className="g-3">
              <Col md={3}>
                <Form.Group controlId="productCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder="Enter category" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="productName">
                  <Form.Label>Product</Form.Label>
                  <Form.Control type="text" placeholder="Enter product" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="productGauge">
                  <Form.Label>Gauge</Form.Label>
                  <Form.Control type="text" placeholder="Enter gauge" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="productColor">
                  <Form.Label>Color</Form.Label>
                  <Form.Control type="text" placeholder="Enter color" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-3 mt-3">
              <Col md={3}>
                <Form.Group controlId="productQty">
                  <Form.Label>Qty</Form.Label>
                  <Form.Control type="text" placeholder="Enter quantity" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="productUnitPrice">
                  <Form.Label>Unit Price</Form.Label>
                  <Form.Control type="text" placeholder="Enter unit price" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="productDiscount">
                  <Form.Label>Discount</Form.Label>
                  <Form.Control type="text" placeholder="Enter discount" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col className="d-flex align-items-center justify-content-center mt-5">
                <div className="d-flex gap-2">
                  <Button variant="danger">Clear</Button>
                  <Button variant="primary">Add</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="mb-4">
          <div className="p-3 bg-light rounded">
            <h5>Product Table</h5>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Category</th>
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
                  <tr key={index}>
                    <td>{product.category}</td>
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

        <div className="d-flex justify-content-end gap-3">
          <Button variant="primary">All Transactions</Button>
          <Button variant="primary">Notify Owner</Button>
          <Button variant="primary">Preview</Button>
          <Button variant="danger">Clear</Button>
          <Button variant="primary">Generate Invoice</Button>
        </div>
      </Form>
    </div>
  );
}

export default BillingInvoice;
