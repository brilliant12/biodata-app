import { Card, Form } from "react-bootstrap";
import { useBiodata } from "../../context/BiodataContext";

function PersonalDetails() {

  const RELIGION_OPTIONS = [
    "Hindu",
    "Muslim",
    "Sikh",
    "Christian",
    "Jain",
    "Buddhist",
    "Parsi",
    "Jewish",
  
    "Other",
  ];

  const { formData, setFormData } = useBiodata();

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  return (
    <div className="form-section-content">
      {/* Name */}
      <Form.Group className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Enter full name"
          value={formData.personal?.name || ""}
          onChange={(e) => updateField("name", e.target.value)}
        />
      </Form.Group>

      {/* DOB */}
      <Form.Group className="mb-2">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          placeholder="Select date of birth"
          value={formData.personal?.dob || ""}
          onChange={(e) => updateField("dob", e.target.value)}
        />
      </Form.Group>

      {/* Height */}
      <Form.Group className="mb-2">
        <Form.Label>Height (cm)</Form.Label>
        <Form.Control
          type="number"
          step="0.1"
          placeholder="Enter height in cm (e.g., 170.5)"
          value={formData.personal?.height || ""}
          onChange={(e) => updateField("height", e.target.value)}
        />
      </Form.Group>

      {/* Religion */}
      <Form.Group className="mb-2">
        <Form.Label>Religion</Form.Label>
        <Form.Select
          value={formData.personal?.religion || ""}
          onChange={(e) => updateField("religion", e.target.value)}
        >
          <option value="">Select Religion</option>
          {RELIGION_OPTIONS.map((religion, index) => (
            <option key={index} value={religion}>
              {religion}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Caste */}
      <Form.Group className="mb-2">
        <Form.Label>Caste</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter caste"
          value={formData.personal?.caste || ""}
          onChange={(e) => updateField("caste", e.target.value)}
        />
      </Form.Group>

      {/* Occupation */}
      <Form.Group className="mb-2">
        <Form.Label>Occupation</Form.Label>
        <Form.Control
          placeholder="Enter occupation"
          value={formData.personal?.occupation || ""}
          onChange={(e) => updateField("occupation", e.target.value)}
        />
      </Form.Group>

      {/* Income */}
      <Form.Group className="mb-2">
        <Form.Label>Income</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter monthly income"
          value={formData.personal?.income || ""}
          onChange={(e) => updateField("income", e.target.value)}
        />
      </Form.Group>

      {/* City */}
      <Form.Group className="mb-2">
        <Form.Label>City</Form.Label>
        <Form.Control
          placeholder="Enter city name"
          value={formData.personal?.city || ""}
          onChange={(e) => updateField("city", e.target.value)}
        />
      </Form.Group>
    </div>
  );

}

export default PersonalDetails;