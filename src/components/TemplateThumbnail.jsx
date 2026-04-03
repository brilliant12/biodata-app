import { Card, Row, Col } from "react-bootstrap";
import { useBiodata } from "../context/BiodataContext";

function TemplateThumbnail() {

  const { template, setTemplate } =
    useBiodata();

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "/templates/classic.svg"
    },
    {
      id: "modern",
      name: "Modern",
      preview: "/templates/modern.svg"
    },
    {
      id: "royal",
      name: "Royal",
      preview: "/templates/royal.svg"
    }
  ];

  return (

    <Card className="mb-3 shadow">

      <Card.Header>
        Choose Template
      </Card.Header>

      <Card.Body>

        <Row>

          {templates.map((tpl) => (
                  
            <Col
              md={4}
              key={tpl.id}
              className="mb-3"
            >

              <div
                onClick={() =>
                  setTemplate(tpl.id)
                }
                style={{
                  cursor: "pointer",
                  border:
                    template === tpl.id
                      ? "3px solid #0d6efd"
                      : "1px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                  background: "#fff"
                }}
              >

                {/* SVG Preview */}

                <div
                  style={{
                    height: "140px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >

                  <img
                    src={tpl.preview}
                    alt={tpl.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }}
                  />

                </div>

                {/* Label */}

                <div
                  style={{
                    textAlign: "center",
                    padding: "6px",
                    fontWeight: "500"
                  }}
                >

                  {tpl.name}

                </div>

              </div>

            </Col>

          ))}

        </Row>

      </Card.Body>

    </Card>

  ); 

}

export default TemplateThumbnail;