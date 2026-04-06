import { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { useBiodata } from "../context/BiodataContext";
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import RoyalTemplate from "../templates/RoyalTemplate";
import "../styles/preview.css";

function BiodataPreview() {
  const { template } = useBiodata();
  const [zoom, setZoom] = useState(0.85); // Slightly larger default for 4/8 split

  const renderTemplate = () => {
    switch (template) {
      case "classic": return <ClassicTemplate />;
      case "royal": return <RoyalTemplate />;
      case "modern": default: return <ModernTemplate />;
    }
  };

  return (
    <div className="preview-workspace h-100">
      {/* Fixed Top Toolbar */}
      <div className="preview-toolbar d-flex align-items-center justify-content-between">
        <div className="small fw-bold text-muted text-uppercase letter-spacing-1">
          Live Preview (A4)
        </div>
        
        <div className="d-flex align-items-center gap-2">
          <ButtonGroup size="sm">
            <Button
              variant="light"
              onClick={() => setZoom(z => Math.max(0.4, z - 0.1))}
            >
              −
            </Button>
            <Button variant="light" disabled className="px-3 fw-bold">
              {Math.round(zoom * 100)}%
            </Button>
            <Button
              variant="light"
              onClick={() => setZoom(z => Math.min(1.5, z + 0.1))}
            >
              +
            </Button>
          </ButtonGroup>

          <Button
            size="sm"
            variant="outline-secondary"
            onClick={() => setZoom(0.85)}
            className="ms-2"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Clean Desk Workspace */}
      <div className="preview-scroll">
        <div
          className="preview-zoom"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "top center"
          }}
        >
          <div className="a4-page" id="biodata-preview">
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiodataPreview;