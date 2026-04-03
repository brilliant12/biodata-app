import { Card, Form } from "react-bootstrap";
import { useBiodata } from "../../context/BiodataContext";

function FamilyDetails() {

  const { formData, setFormData } =
    useBiodata();

  const updateField = (field, value) => {

    setFormData(prev => ({
      ...prev,
      family: {
        ...prev.family,
        [field]: value
      }
    }));

  };

  return (

    <Card className="mb-3 shadow">

      <Card.Header>
        Family Details
      </Card.Header>

      <Card.Body>

        <Form.Group className="mb-2">

          <Form.Label>Father Name</Form.Label>

          <Form.Control
            value={formData.family.father}
            onChange={(e) =>
              updateField("father", e.target.value)
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Mother Name</Form.Label>

          <Form.Control
            value={formData.family.mother}
            onChange={(e) =>
              updateField("mother", e.target.value)
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Siblings</Form.Label>

          <Form.Control
            value={formData.family.siblings}
            onChange={(e) =>
              updateField("siblings", e.target.value)
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Family Type</Form.Label>

          <Form.Select
            value={formData.family.familyType}
            onChange={(e) =>
              updateField(
                "familyType",
                e.target.value
              )
            }
          >

            <option value="">
              Select
            </option>

            <option value="Joint">
              Joint
            </option>

            <option value="Nuclear">
              Nuclear
            </option>

          </Form.Select>

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Family Status</Form.Label>

          <Form.Control
            value={formData.family.familyStatus}
            onChange={(e) =>
              updateField(
                "familyStatus",
                e.target.value
              )
            }
          />

        </Form.Group>

      </Card.Body>

    </Card>

  );

}

export default FamilyDetails;