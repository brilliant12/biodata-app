import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Draws a sharp, professional vector frame on each PDF page.
 */
const drawVectorFrame = (pdf, templateId) => {
  const width = 210;
  const height = 297;
  const outerMargin = 7;
  const innerMargin = 10;

  let primaryColor = "#c59d5f"; // Classic gold
  let hasDoubleBorder = true;

  if (templateId === "modern") {
    primaryColor = "#2c3e50"; // Modern dark blue
    hasDoubleBorder = false;
  } else if (templateId === "royal") {
    primaryColor = "#bfa046"; // Royal gold
    hasDoubleBorder = true;
  }

  pdf.setDrawColor(primaryColor);
  pdf.setLineWidth(1.2);
  pdf.rect(outerMargin, outerMargin, width - outerMargin * 2, height - outerMargin * 2);

  if (hasDoubleBorder) {
    pdf.setLineWidth(0.4);
    pdf.rect(innerMargin, innerMargin, width - innerMargin * 2, height - innerMargin * 2);
  }
};

const exportToPDF = async (elementId, templateId = "classic") => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const PAGE_WIDTH = 210;
  const PAGE_HEIGHT = 297;
  const SIDE_MARGIN = 15;
  const TOP_MARGIN = 20;
  const BOTTOM_MARGIN = 20;

  // Width and height of the content area in mm
  const CONTENT_WIDTH = PAGE_WIDTH - SIDE_MARGIN * 2;
  const VIEWPORT_HEIGHT = PAGE_HEIGHT - TOP_MARGIN - BOTTOM_MARGIN;

  try {
    // 1. Capture the entire element at high quality
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          clonedElement.style.height = "auto";
          clonedElement.style.minHeight = "auto";
          clonedElement.style.overflow = "visible";
          const containers = clonedElement.querySelectorAll(".template-outer-container, .template-inner-container");
          containers.forEach(c => {
            c.style.border = "none";
            c.style.boxShadow = "none";
            if (c.classList.contains("template-outer-container")) c.style.padding = "0";
          });
        }
      }
    });

    const masterWidth = canvas.width;
    const masterHeight = canvas.height;
    
    // Pixels per mm based on the capture scale
    const pxPerMm = masterWidth / CONTENT_WIDTH;
    const pxHeightPerPage = Math.floor(VIEWPORT_HEIGHT * pxPerMm);
    
    const pdf = new jsPDF("p", "mm", "a4");
    
    let currentY = 0;
    let pageNumber = 1;

    while (currentY < masterHeight) {
      if (pageNumber > 1) pdf.addPage();
      
      drawVectorFrame(pdf, templateId);

      // Determine height of the crop (last page might be shorter)
      const cropHeight = Math.min(pxHeightPerPage, masterHeight - currentY);
      
      // 2. CREATE A CROP CANVAS
      // This is the "Secret Sauce" to zero-overlap
      const cropCanvas = document.createElement("canvas");
      cropCanvas.width = masterWidth;
      cropCanvas.height = cropHeight;
      const ctx = cropCanvas.getContext("2d");
      
      ctx.drawImage(
        canvas, 
        0, currentY, masterWidth, cropHeight, // Source
        0, 0, masterWidth, cropHeight        // Destination
      );

      // 3. ADD CROP TO PDF
      const imgData = cropCanvas.toDataURL("image/jpeg", 1.0);
      const imgHeightMm = (cropHeight / masterWidth) * CONTENT_WIDTH;

      pdf.addImage(
        imgData,
        "JPEG",
        SIDE_MARGIN,
        TOP_MARGIN,
        CONTENT_WIDTH,
        imgHeightMm,
        undefined,
        "FAST"
      );

      currentY += pxHeightPerPage;
      pageNumber++;
    }

    pdf.save(`biodata_${templateId}_pro_${new Date().getTime()}.pdf`);

  } catch (error) {
    console.error("Pro PDF Export Error:", error);
  }
};

export default exportToPDF;