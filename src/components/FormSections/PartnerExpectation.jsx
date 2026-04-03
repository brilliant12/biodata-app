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

    <Card className="mb-3 shadow">

      <Card.Header>
        Partner Expectation
      </Card.Header>

      <Card.Body>

        <Form.Group className="mb-2">

          <Form.Label>Age From</Form.Label>

          <Form.Control
            type="number"
            value={formData.partner.ageFrom}
            onChange={(e) =>
              updateField(
                "ageFrom",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Age To</Form.Label>

          <Form.Control
            type="number"
            value={formData.partner.ageTo}
            onChange={(e) =>
              updateField(
                "ageTo",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Expected Height</Form.Label>

          <Form.Control
            value={formData.partner.height}
            onChange={(e) =>
              updateField(
                "height",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Expectation Notes</Form.Label>

          <Form.Control
            as="textarea"
            rows={3}
            value={formData.partner.expectation}
            onChange={(e) =>
              updateField(
                "expectation",
                e.target.value
              )
            }
          />

        </Form.Group>

      </Card.Body>

    </Card>

  );

}

export default PartnerExpectation;