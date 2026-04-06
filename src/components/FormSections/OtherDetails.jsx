import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useBiodata } from "../../context/BiodataContext";

function OtherDetails() {

  const { formData, setFormData } = useBiodata();

  const details = formData.otherDetails || [];

  /* Add Row */

  const addRow = () => {

    setFormData(prev => ({
      ...prev,
      otherDetails: [
        ...prev.otherDetails,
        { label: "", value: "" }
      ]
    }));

  };

  /* Remove Row */

  const removeRow = (index) => {

    const updated = [...details];
    updated.splice(index, 1);

    setFormData(prev => ({
      ...prev,
      otherDetails: updated
    }));

  };

  /* Update Field */

  const handleChange = (index, field, value) => {

    const updated = [...details];

    updated[index][field] = value;

    setFormData(prev => ({
      ...prev,
      otherDetails: updated
    }));

  };

  return (
    <div className="form-section-content">
      {details.map((item, index) => (
        <Row key={index} className="mb-2 align-items-end">
          <Col xs={5}>
            <Form.Group>
              <Form.Label>Label</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Blood Group"
                value={item.label}
                onChange={(e) => handleChange(index, "label", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={5}>
            <Form.Group>
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. O+"
                value={item.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={2}>
            <Button
              variant="danger"
              onClick={() => removeRow(index)}
              className="w-100 p-2"
            >
              ×
            </Button>
          </Col>
        </Row>
      ))}

      <Button
        variant="outline-primary"
        onClick={addRow}
        className="mt-2 w-100 py-2 border-dashed"
        style={{ borderStyle: "dashed" }}
      >
        + Add More Detail
      </Button>
    </div>
  );

}

export default OtherDetails;