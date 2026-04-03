import { Button } from "react-bootstrap";
import exportToPDF from "../utils/pdfExport";

function ExportPDF() {

  const handleExport = async () => {
    
    await exportToPDF("biodata-preview");

  };

  return (

    <Button
      variant="success"
      className="w-100 mb-3"
      onClick={handleExport}
    >
      Download PDF
    </Button>

  );

}

export default ExportPDF;