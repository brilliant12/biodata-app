import { Card, Form } from "react-bootstrap";
import { useBiodata } from "../context/BiodataContext";

function PhotoUploader() {

  const { formData, setFormData } =
    useBiodata();

  const handlePhoto = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setFormData({
        ...formData,
        photo: reader.result
      });

    };

    reader.readAsDataURL(file);

  };

  return (

    <Card className="mb-3 shadow">

      <Card.Header>
        Upload Photo
      </Card.Header>

      <Card.Body>

        <Form.Control
          type="file"
          accept="image/*"
          onChange={handlePhoto}
        />

      </Card.Body>

    </Card>

  );

}

export default PhotoUploader;