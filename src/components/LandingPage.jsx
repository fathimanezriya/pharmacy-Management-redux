// src/components/LandingPage.jsx
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center vh-100"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/shutterstock/videos/3575052639/thumb/1.jpg?ip=x480')",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Container>
        <h1 className="display-3 fw-bold">Pharmacy Management</h1>
        <p className="lead">Manage medicines with ease - Add, Update, Delete</p>
        <Button variant="light" size="lg" onClick={() => navigate("/medicines")}>
          Enter Pharmacy
        </Button>
      </Container>
    </div>
  );
}

export default LandingPage;
