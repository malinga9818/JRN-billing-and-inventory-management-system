import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Images
import roof1 from "../../assets/roofing1.jpeg";
import roof2 from "../../assets/roofing2.jpeg";
import roof3 from "../../assets/roofing3.jpeg";

// Talks data
const talks = [
  {
    id: 1,
    title: "Secure Your Future with Amano Roofing...",

    description: " Built for Safety, Engineered for Strength!",
    img: roof1,
  },
  {
    id: 2,
    title: "Elevate Your Shelter with Amano Roofing...",
    description: "Durable Solutions for Every Weather Challenge!",
    img: roof2,
  },
  {
    id: 3,
    title: "Crafted for Perfection, Designed for You...",
    description: "Amano Roofing – Your Partner in Protection!",
    img: roof3,
  },
];

function Carousels() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container fluid className="py-4 bg-light">
      <Row>
        {/* Carousel Section */}
        <Col lg={10} md={12}>
          <Carousel interval={2000} fade>
            {talks.map((talk) => (
              <Carousel.Item key={talk.id}>
                {/* Image */}
                <img
                  className="d-block w-100 rounded"
                  src={talk.img}
                  alt={talk.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                {/* Caption */}
                <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
                  <h3>{talk.title}</h3>
                  <p>{talk.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Calendar and Clock Section */}
        <Col lg={2} md={12}>
          <div
            className="d-flex flex-column align-items-center bg-white rounded shadow p-4 h-100"
            style={{ minHeight: "200px" }}
          >
            {/* Real-Time Clock */}
            <div className="text-center">
              <h2 className="text-primary">
                {currentTime.toLocaleTimeString()}
              </h2>
              <p>{currentTime.toLocaleDateString()}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Carousels;
