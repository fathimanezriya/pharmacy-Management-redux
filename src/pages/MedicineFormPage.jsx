import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addMedicine, updateMedicine } from "../redux/medicineSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function MedicineFormPage() {
  const { id } = useParams(); // if editing, id will exist
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((s) => s.medicines.list);
  const itemToEdit = list.find((m) => m.id === id) || null;

  const [form, setForm] = useState({
    name: "",
    available: true,
    mfgDate: "",
    expDate: "",
    notes: "",
  });

  useEffect(() => {
    if (itemToEdit) {
      setForm(itemToEdit);
    } else {
      setForm({ name: "", available: true, mfgDate: "", expDate: "", notes: "" });
    }
  }, [itemToEdit, id]);

  const handleChange = (field) => (e) => {
    const value = field === "available" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("Please enter medicine name.");
      return;
    }

    if (id) {
      dispatch(updateMedicine(form));
    } else {
      // simple id generator (no external package)
      const newItem = { ...form, id: Date.now().toString() };
      dispatch(addMedicine(newItem));
    }
    navigate("/"); // back to list
  };

  return (
    <Container className="mt-4">
      <Button variant="link" onClick={() => navigate(-1)}>← Back</Button>
      <Card className="p-3">
        <h3>{id ? "Edit Medicine" : "Add Medicine"}</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Medicine Name *</Form.Label>
            <Form.Control
              type="text"
              value={form.name}
              onChange={handleChange("name")}
              placeholder="e.g. Paracetamol"
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Check
              type="checkbox"
              label="Available"
              checked={form.available}
              onChange={handleChange("available")}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Manufacture Date</Form.Label>
            <Form.Control type="date" value={form.mfgDate} onChange={handleChange("mfgDate")} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="date" value={form.expDate} onChange={handleChange("expDate")} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={2} value={form.notes} onChange={handleChange("notes")} />
          </Form.Group>

          <div className="mt-3">
            <Button variant="success" type="submit">{id ? "Update" : "Add"} Medicine</Button>{" "}
            <Button variant="secondary" onClick={() => navigate("/")}>Cancel</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
