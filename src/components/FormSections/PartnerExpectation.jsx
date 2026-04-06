import { Card, Form } from "react-bootstrap";
import { useBiodata } from "../../context/BiodataContext";

function PartnerExpectation() {

  const { formData, setFormData } =
    useBiodata();

  const updateField = (field, value) => {

    setFormData(prev => ({
      ...prev,
      partner: {
        ...prev.partner,
        [field]: value
      }
    }));

  };

  return (
    <div className="form-section-content">
      <Form.Group className="mb-2">
        <Form.Label>Age Range</Form.Label>
        <div className="d-flex gap-2 align-items-center">
          <Form.Control
            type="number"
            placeholder="From"
            value={formData.partner.ageFrom}
            onChange={(e) => updateField("ageFrom", e.target.value)}
          />
          <span>to</span>
          <Form.Control
            type="number"
            placeholder="To"
            value={formData.partner.ageTo}
            onChange={(e) => updateField("ageTo", e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Expected Height</Form.Label>
        <Form.Control
          value={formData.partner.height}
          onChange={(e) => updateField("height", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Expectation Notes</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={formData.partner.expectation}
          onChange={(e) => updateField("expectation", e.target.value)}
        />
      </Form.Group>
    </div>
  );

}

export default PartnerExpectation;