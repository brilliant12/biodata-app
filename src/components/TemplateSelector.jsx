import { Card, Button } from "react-bootstrap";
import { useBiodata } from "../context/BiodataContext";

function TemplateSelector() {

  const { template, setTemplate } =
    useBiodata();

  const templates = [
    "classic",
    "modern",
    "royal"
  ];

  return (

    <Card className="mb-3 shadow">

      <Card.Header>
        Select Template
      </Card.Header>

      <Card.Body>

        {templates.map(t => (

          <Button
            key={t}
            variant={
              template === t
                ? "primary"
                : "outline-primary"
            }
            className="me-2 mb-2"
            onClick={() => setTemplate(t)}
          >
            {t}
          </Button>

        ))}

      </Card.Body>

    </Card>

  );

}

export default TemplateSelector;