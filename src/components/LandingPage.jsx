import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom";
const templates = [
  { id: 1, name: "Classic", image: "/templates/classic.svg" },
  { id: 2, name: "Modern", image: "/templates/modern.svg" },
  { id: 3, name: "Royal", image: "/templates/royal.svg" },
];

export function LandingPage() {
     const navigate = useNavigate();
  const handleStart = (templateId) => {
    navigate(`/builder?template=${templateId}`);
    
  };

  return (
    <div className="landing-page">
      <Container>
        {/* Hero Section */}
        <Row className="text-center hero-section">
          <Col>
            <h1 className="hero-title animate-hero">Create Your Bio-Data in Minutes</h1>
            <p className="hero-subtitle animate-subtitle">
              Choose a template, fill your details, and download as PDF instantly.
            </p>
            <Button
              variant="light"
              size="lg"
              onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
              className="hero-btn"
            >
              Explore Templates
            </Button>
          </Col>
        </Row>

        {/* Templates Section */}
        <Row className="justify-content-center templates-section mt-5">
          {templates.map((template) => (
            <Col md={4} sm={6} xs={12} key={template.id} className="mb-4">
              <Card className="template-card" onClick={() => handleStart(template.id)}>
                <Card.Img
                  variant="top"
                  src={template.image}
                  alt={template.name}
                  className="template-img"
                />
                <Card.Body className="text-center">
                  {/* <Card.Title>{template.name}</Card.Title> */}
                  <Button variant="outline-light" onClick={() => handleStart(template.id)}>
                    Start
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}