import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function EntryPage() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center text-white"
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/57/02/39/360_F_257023906_UumIgLi6ECSyIGuWVNpuHLYPc3jZuiaE.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="text-center bg-dark bg-opacity-50 p-5 rounded">
        <h1 className="mb-4 fw-bold text-dark">💊 Pharmacy Management</h1>
        <Button size="lg" variant="light" onClick={() => navigate("/medicines")}>
          Enter
        </Button>
      </Container>
    </div>
  );
}
