import { Card, Form } from "react-bootstrap";
import { useBiodata } from "../../context/BiodataContext";

function HoroscopeDetails() {
const RASHI_OPTIONS = [
  "Mesh (Aries)",
  "Vrishabh (Taurus)",
  "Mithun (Gemini)",
  "Kark (Cancer)",
  "Singh (Leo)",
  "Kanya (Virgo)",
  "Tula (Libra)",
  "Vrishchik (Scorpio)",
  "Dhanu (Sagittarius)",
  "Makar (Capricorn)",
  "Kumbh (Aquarius)",
  "Meen (Pisces)"
];

 const NAKSHATRA_OPTIONS = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashirsha",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati"
];

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
    <div className="form-section-content">
      <Form.Group className="mb-2">
        <Form.Label>Rashi</Form.Label>
        <Form.Select
          value={formData.horoscope?.rashi || ""}
          onChange={(e) => updateField("rashi", e.target.value)}
        >
          <option value="">Select Rashi</option>
          {RASHI_OPTIONS.map((rashi, index) => (
            <option key={index} value={rashi}>
              {rashi}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Nakshatra</Form.Label>
        <Form.Select
          value={formData.horoscope?.nakshatra || ""}
          onChange={(e) => updateField("nakshatra", e.target.value)}
        >
          <option value="">Select Nakshatra</option>
          {NAKSHATRA_OPTIONS.map((nakshatra, index) => (
            <option key={index} value={nakshatra}>
              {nakshatra}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Manglik</Form.Label>
        <Form.Select
          value={formData.horoscope.manglik}
          onChange={(e) => updateField("manglik", e.target.value)}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Gotra</Form.Label>
        <Form.Control
          value={formData.horoscope.gotra}
          onChange={(e) => updateField("gotra", e.target.value)}
        />
      </Form.Group>
    </div>
  );
}

export default HoroscopeDetails;