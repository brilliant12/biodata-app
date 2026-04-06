import { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

import { useBiodata } from "../context/BiodataContext";

import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import RoyalTemplate from "../templates/RoyalTemplate";

import "../styles/preview.css";

function BiodataPreview() {

  const { template } = useBiodata();

  const [zoom, setZoom] = useState(1);

  const renderTemplate = () => {

    switch (template) {

      case "classic":
        return <ClassicTemplate />;

      case "royal":
        return <RoyalTemplate />;

      case "modern":
      default:
        return <ModernTemplate />;

    }

  };

  return (

    <div className="preview-wrapper">

      {/* Controls */}

      <Card className="preview-toolbar shadow-sm bg-white">

        <Card.Body className="d-flex justify-content-between align-items-center">

          {/* Left */}

          <div className="fw-semibold">

            Biodata Preview

            <span className="ms-2 text-muted small">
              A4 Layout
            </span>

          </div>

          {/* Right */}

          <div className="d-flex align-items-center gap-2">

            <ButtonGroup>

              <Button
                size="sm"
                variant="outline-secondary"
                onClick={() =>
                  setZoom(z => Math.max(0.6, z - 0.1))
                }
              >
                −
              </Button>

              <Button
                size="sm"
                variant="light"
                disabled
              >
                {Math.round(zoom * 100)}%
              </Button>

              <Button
                size="sm"
                variant="outline-secondary"
                onClick={() =>
                  setZoom(z => Math.min(1.5, z + 0.1))
                }
              >
                +
              </Button>

            </ButtonGroup>

            <Button
              size="sm"
              variant="outline-primary"
              onClick={() => setZoom(1)}
            >
              Reset
            </Button>

          </div>

        </Card.Body>

      </Card>

      {/* Preview */}

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

            <div className="page-label">
              Page 1
            </div>

          </div>
        </div>

      </div>

    </div>

  );

}

export default BiodataPreview;