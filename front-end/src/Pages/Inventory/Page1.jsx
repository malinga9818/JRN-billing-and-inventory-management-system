import React from "react";
import { Card, Row, Tab, Dropdown, DropdownButton, Table, Button } from "react-bootstrap";

function Page1() {
  return (
    <>
      <div className="mb-5 text-center d-flex justify-content-evenly">
        <Card border="info" style={{ width: '15rem', backgroundColor: '#64748b' }}>
          <Card.Body>
            <Card.Title>Out Of Stocks</Card.Title>
            <Card.Subtitle>00</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card border="info" style={{ width: '15rem', backgroundColor: '#64748b' }}>
          <Card.Body>
            <Card.Title>Re-Order Items</Card.Title>
            <Card.Subtitle>00</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card border="info" style={{ width: '15rem', backgroundColor: '#64748b' }}>
          <Card.Body>
            <Card.Title>Value Of Stocks</Card.Title>
            <Card.Subtitle>00</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>


      <div>
        <div><h2>Available Stock</h2></div>
        <div>
          <DropdownButton id="" title="Please select your color">
            <Dropdown.Item as="button">Blue</Dropdown.Item>
            <Dropdown.Item as="button">Green</Dropdown.Item>
            <Dropdown.Item as="button">Chocolate Brown</Dropdown.Item>
            <Dropdown.Item as="button">Autom Red</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Gutter</td>
                <td>1500</td>
                <td>ft</td>
              </tr>
            </tbody>

          </Table>
          <div className="gap-2 d-flex justify-content-end">
            <Button variant="primary">Add new</Button>
            <Button variant="success">Update</Button>
          </div>
        </div>

      </div>


      <div>

      </div>
    </>
  )
}

export default Page1;
