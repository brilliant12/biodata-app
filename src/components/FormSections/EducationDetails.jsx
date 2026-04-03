import { Card, Form } from "react-bootstrap";
import { useBiodata } from "../../context/BiodataContext";

function EducationDetails() {

  const { formData, setFormData } =
    useBiodata();

  const updateField = (field, value) => {

    setFormData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        [field]: value
      }
    }));

  };

  return (

    <Card className="mb-3 shadow">

      <Card.Header>
        Education & Career
      </Card.Header>

      <Card.Body>

        <Form.Group className="mb-2">

          <Form.Label>Highest Degree</Form.Label>

          <Form.Control
            value={formData.education.degree}
            onChange={(e) =>
              updateField(
                "degree",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>University</Form.Label>

          <Form.Control
            value={formData.education.university}
            onChange={(e) =>
              updateField(
                "university",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Profession</Form.Label>

          <Form.Control
            value={formData.education.profession}
            onChange={(e) =>
              updateField(
                "profession",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Company</Form.Label>

          <Form.Control
            value={formData.education.company}
            onChange={(e) =>
              updateField(
                "company",
                e.target.value
              )
            }
          />

        </Form.Group>

      </Card.Body>

    </Card>

  );

}

export default EducationDetails;