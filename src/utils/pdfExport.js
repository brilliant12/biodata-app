import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const exportToPDF = async (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const marginMM = 10; // margin in mm

    // Capture canvas at lower scale for smaller file size
    const canvas = await html2canvas(element, {
      scale: 2,              // good balance between quality & size
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    // Convert px to mm
    const pxToMm = 0.264583;
    const pdfWidth = canvas.width * pxToMm + marginMM * 2;
    const pdfHeight = canvas.height * pxToMm + marginMM * 2;

    const imgData = canvas.toDataURL("image/jpeg", 0.7); // compress image

    // Create PDF with exact content size + margins
    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: [pdfWidth, pdfHeight],
    });

    // Add image with margin
    pdf.addImage(
      imgData,
      "JPEG",
      marginMM,
      marginMM,
      canvas.width * pxToMm,
      canvas.height * pxToMm,
      undefined,
      "FAST"
    );

    pdf.save("biodata.pdf");
  } catch (error) {
    console.error("PDF Export Error:", error);
  }
};

export default exportToPDF;