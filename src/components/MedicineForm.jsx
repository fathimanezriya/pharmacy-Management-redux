// src/components/MedicineTable.jsx
import React from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteMedicine } from "../redux/medicineSlice";
import { useNavigate } from "react-router-dom";

function MedicineTable() {
  const medicines = useSelector((state) => state.medicine.medicines);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  return (
    <Table bordered hover striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Available</th>
          <th>MFG Date</th>
          <th>EXP Date</th>
          <th>Notes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {medicines.map((med) => {
          const expired = med.expDate && med.expDate < today;
          return (
            <tr key={med.id} className={expired ? "table-danger" : ""}>
              <td>{med.name}</td>
              <td>
                {med.available ? (
                  <Badge bg="success">Yes</Badge>
                ) : (
                  <Badge bg="secondary">No</Badge>
                )}
              </td>
              <td>{med.mfgDate}</td>
              <td>{med.expDate}</td>
              <td>{med.notes}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => navigate("/add-medicine", { state: med })}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => dispatch(deleteMedicine(med.id))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default MedicineTable;
