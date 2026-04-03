import { Card, Form } from "react-bootstrap";
import { useBiodata } from "../../context/BiodataContext";

function PersonalDetails() {

  const { formData, setFormData } =
    useBiodata();

  const updateField = (field, value) => {

    setFormData({
      ...formData,
      personal: {
        ...formData.personal,
        [field]: value
      }
    });

  };

  return (

    <Card className="mb-3 shadow">

      <Card.Header>
        Personal Details
      </Card.Header>

      <Card.Body>

        <Form.Group className="mb-2">

          <Form.Label>Name</Form.Label>

          <Form.Control
            value={formData.personal.name}
            onChange={(e) =>
              updateField(
                "name",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Date of Birth</Form.Label>

          <Form.Control
            type="date"
            value={formData.personal.dob}
            onChange={(e) =>
              updateField(
                "dob",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Occupation</Form.Label>

          <Form.Control
            value={formData.personal.occupation}
            onChange={(e) =>
              updateField(
                "occupation",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>City</Form.Label>

          <Form.Control
            value={formData.personal.city}
            onChange={(e) =>
              updateField(
                "city",
                e.target.value
              )
            }
          />

        </Form.Group>

      </Card.Body>

    </Card>

  );

}

export default PersonalDetails;