import { Card, Row, Col } from "react-bootstrap";
import { useBiodata } from "../context/BiodataContext";

function TemplateThumbnail() {
  const { template, setTemplate } = useBiodata();

  const templates = [
    { id: "classic", name: "Classic Gold", preview: "/templates/classic.svg" },
    { id: "modern", name: "Modern Minimal", preview: "/templates/modern.svg" },
    { id: "royal", name: "Royal Heritage", preview: "/templates/royal.svg" }
  ];

  return (
    <Card className="mb-3 shadow-sm border-0 rounded-3 overflow-hidden">
      <Card.Body className="p-2 px-3">
        <div className="mb-2">
          <span className="fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>
            Template Style
          </span>
        </div>

        <Row className="g-2">
          {templates.map((tpl) => (
            <Col xs={4} key={tpl.id}>
              <div
                onClick={() => setTemplate(tpl.id)}
                className={`template-option ${template === tpl.id ? "active" : ""}`}
              >
                <div className="preview-box">
                  <img src={tpl.preview} alt={tpl.name} />
                </div>
                <div className="template-name">{tpl.name.split(" ")[0]}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>

      <style>{`
        .template-option {
          cursor: pointer;
          border: 1px solid #f1f5f9;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.2s ease;
          background: #f8fafc;
          text-align: center;
        }
        .template-option:hover {
          border-color: #cbd5e1;
        }
        .template-option.active {
          border-color: var(--primary-indigo);
          background: #fff;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.1);
        }
        .preview-box {
          height: 50px; /* Much More Compact */
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .preview-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .template-name {
          font-size: 9px;
          font-weight: 700;
          padding: 2px;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.02);
          color: #94a3b8;
        }
        .template-option.active .template-name {
          background: var(--primary-indigo);
          color: #fff;
        }
      `}</style>
    </Card>
  );
}

export default TemplateThumbnail;