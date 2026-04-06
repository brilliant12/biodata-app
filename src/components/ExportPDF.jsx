import { Button, Spinner, Stack } from "react-bootstrap";
import { useState } from "react";
import exportToPDF from "../utils/pdfExport";
import { useBiodata } from "../context/BiodataContext";

function ExportPDF() {
  const { template } = useBiodata();
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    try {
      setIsExporting(true);
      await exportToPDF("biodata-preview", template);
    } catch (error) {
      console.error("PDF Export Failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Stack gap={2} className="mb-3">
      <Button
        variant="success"
        className="w-100 py-2 shadow-sm"
        onClick={handleExport}
        disabled={isExporting}
        style={{ fontWeight: "600" }}
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
    </Stack>
  );
}

export default ExportPDF;