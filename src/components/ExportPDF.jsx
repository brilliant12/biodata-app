import { Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import exportToPDF from "../utils/pdfExport";

function ExportPDF() {

  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {

    try {

      setIsExporting(true);

      await exportToPDF("biodata-preview");

      // success — button will re-enable automatically

    } catch (error) {

      console.error("PDF Export Failed:", error);

    } finally {

      setIsExporting(false);

    }

  };

  return (

    <Button
      variant="success"
      className="w-100 mb-3"
      onClick={handleExport}
      disabled={isExporting}
    >

      {isExporting ? (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            className="me-2"
          />
          Generating PDF...
        </>
      ) : (
        "Download PDF"
      )}

    </Button>

  );

}

export default ExportPDF;