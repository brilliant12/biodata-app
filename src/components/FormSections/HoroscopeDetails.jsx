import { Card, Form } from "react-bootstrap";
import { useBiodata } from "../../context/BiodataContext";

function HoroscopeDetails() {

  const { formData, setFormData } =
    useBiodata();

  const updateField = (field, value) => {

    setFormData(prev => ({
      ...prev,
      horoscope: {
        ...prev.horoscope,
        [field]: value
      }
    }));

  };

  return (

    <Card className="mb-3 shadow">

      <Card.Header>
        Horoscope Details
      </Card.Header>

      <Card.Body>

        <Form.Group className="mb-2">

          <Form.Label>Rashi</Form.Label>

          <Form.Control
            value={formData.horoscope.rashi}
            onChange={(e) =>
              updateField(
                "rashi",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Nakshatra</Form.Label>

          <Form.Control
            value={formData.horoscope.nakshatra}
            onChange={(e) =>
              updateField(
                "nakshatra",
                e.target.value
              )
            }
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Manglik</Form.Label>

          <Form.Select
            value={formData.horoscope.manglik}
            onChange={(e) =>
              updateField(
                "manglik",
                e.target.value
              )
            }
          >

            <option value="">
              Select
            </option>

            <option value="Yes">
              Yes
            </option>

            <option value="No">
              No
            </option>

          </Form.Select>

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Gotra</Form.Label>

          <Form.Control
            value={formData.horoscope.gotra}
            onChange={(e) =>
              updateField(
                "gotra",
                e.target.value
              )
            }
          />

        </Form.Group>

      </Card.Body>

    </Card>

  );

}

export default HoroscopeDetails;