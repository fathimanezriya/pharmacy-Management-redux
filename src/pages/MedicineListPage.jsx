import React from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteMedicine } from "../redux/medicineSlice";
import { useNavigate } from "react-router-dom";

export default function MedicineListPage() {
  const medicines = useSelector((s) => s.medicines.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);

  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this medicine?")) {
      dispatch(deleteMedicine(id));
    }
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Medicine Inventory</h2>
        <div>
          <Button variant="primary" onClick={() => navigate("/add")}>➕ Add Medicine</Button>
        </div>
      </div>

      {medicines.length === 0 ? (
        <div className="alert alert-info">No medicines yet — click "Add Medicine".</div>
      ) : (
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Available</th>
              <th>MFG Date</th>
              <th>EXP Date</th>
              <th>Notes</th>
              <th style={{ minWidth: 180 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((m) => {
              const expired = m.expDate && m.expDate < today;
              return (
                <tr key={m.id} className={expired ? "table-danger" : ""}>
                  <td>{m.name}</td>
                  <td>{m.available ? <Badge bg="success">Yes</Badge> : <Badge bg="secondary">No</Badge>}</td>
                  <td>{m.mfgDate || "-"}</td>
                  <td>{m.expDate || "-"}</td>
                  <td style={{ whiteSpace: "pre-wrap" }}>{m.notes || "-"}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => navigate(`/edit/${m.id}`)}>Edit</Button>{" "}
                    <Button variant="danger" size="sm" onClick={() => confirmDelete(m.id)}>Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
