import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faPalette,
  faShieldHalved,
  faFilePdf,
  faPenToSquare,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

const templates = [
  { id: "classic", name: "Classic Gold", tag: "Most Popular", image: "/templates/classic.svg" },
  { id: "modern", name: "Modern Minimal", tag: "New", image: "/templates/modern.svg" },
  { id: "royal", name: "Royal Heritage", tag: "Premium", image: "/templates/royal.svg" },
];

export function LandingPage() {
  const navigate = useNavigate();

  const handleStart = (templateId) => {
    navigate(`/builder?template=${templateId}`);
  };

  return (
    <div className="landing-page">
      <Container>
        {/* --- HERO SECTION --- */}
        <section className="hero-section animate-reveal">
          <div className="premium-badge">✨ Multi-Template Editor</div>
          <h1 className="hero-title">
            Create Your Premium <br />
            Matrimony Biodata
          </h1>
          <p className="hero-subtitle">
            Professional designs tailored for a perfect impression. Fill your details,
            choose a template, and download your PDF in under 2 minutes.
          </p>
          <div className="hero-cta-group">
            <Button
              className="btn-primary-gold"
              onClick={() => document.getElementById('templates').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Free
            </Button>
            <Button
              className="btn-outline-glass text-decoration-none"
              onClick={() => navigate("/builder?mock=true")}
            >
              View Samples
            </Button>
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section className="features-section mb-5">
          <Row className="g-4">
            <Col md={4}>
              <div className="feature-card animate-reveal" style={{ animationDelay: '0.1s' }}>
                <FontAwesomeIcon icon={faBolt} className="feature-icon" />
                <h3 className="feature-title">Lightning Fast</h3>
                <p className="feature-text">No registration required. Just fill the form and get your PDF instantly.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card animate-reveal" style={{ animationDelay: '0.2s' }}>
                <FontAwesomeIcon icon={faPalette} className="feature-icon" />
                <h3 className="feature-title">Premium Designs</h3>
                <p className="feature-text">Curated templates that balance tradition and modern aesthetics perfectly.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card animate-reveal" style={{ animationDelay: '0.3s' }}>
                <FontAwesomeIcon icon={faShieldHalved} className="feature-icon" />
                <h3 className="feature-title">100% Private</h3>
                <p className="feature-text">Your data stays in your browser. We don't store any of your personal information.</p>
              </div>
            </Col>
          </Row>
        </section>

        {/* --- HOW IT WORKS --- */}
        <section className="how-it-works my-5 py-5">
          <div className="section-header">
            <h2 className="section-title">Three Simple Steps</h2>
          </div>
          <Row className="text-center g-4">
            <Col md={4} className="animate-reveal" style={{ animationDelay: '0.1s' }}>
              <FontAwesomeIcon icon={faPenToSquare} size="2x" className="mb-3 text-muted" />
              <h5>1. Fill Details</h5>
              <p className="text-muted">Enter personal, family, and education info.</p>
            </Col>
            <Col md={4} className="animate-reveal" style={{ animationDelay: '0.2s' }}>
              <FontAwesomeIcon icon={faPalette} size="2x" className="mb-3 text-muted" />
              <h5>2. Choose Style</h5>
              <p className="text-muted">Pick a template that matches your personality.</p>
            </Col>
            <Col md={4} className="animate-reveal" style={{ animationDelay: '0.3s' }}>
              <FontAwesomeIcon icon={faFilePdf} size="2x" className="mb-3 text-muted" />
              <h5>3. Download PDF</h5>
              <p className="text-muted">Get your professional biodata instantly.</p>
            </Col>
          </Row>
        </section>

        {/* --- TEMPLATES SECTION --- */}
        <section id="templates" className="templates-section mt-5 pt-5">
          <div className="section-header">
            <Badge bg="transparent" className="border text-uppercase mb-2 px-3 py-2" style={{ letterSpacing: '1px' }}>
              Select a Style
            </Badge>
            <h2 className="section-title">Premium Biodata Templates</h2>
          </div>

          <Row className="justify-content-center g-4">
            {templates.map((template) => (
              <Col lg={4} md={6} key={template.id}>
                <Card className="template-card" onClick={() => handleStart(template.id)}>
                  <div className="template-image-wrapper">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="template-img"
                    />
                    <div className="card-overlay">
                      <Button variant="light" className="fw-bold1 px-4">
                        Choose Template
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="bg-transparent border-0 d-flex justify-content-between align-items-center px-4 py-3">
                    <span className="fw-bold">{template.name}</span>
                    <Badge bg="secondary" className="template-badge-small">{template.tag}</Badge>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-5 pt-5 pb-4 text-center text-muted border-top border-secondary">
          <p className="small">© 2026 Premium Biodata Builder. All rights reserved.</p>
        </footer>
      </Container>
    </div>
  );
}