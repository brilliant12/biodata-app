import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const exportToPDF = async (elementId) => {

  const element =
    document.getElementById(elementId);

  if (!element) return;

  try {

    const canvas =
      await html2canvas(element, {
        scale: 3,              // higher quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff"
      });

    const imgData =
      canvas.toDataURL("image/png");

    const pdf =
      new jsPDF("p", "mm", "a4");

    const pageWidth = 210;
    const pageHeight = 297;

    /* Add margins */

    const margin = 10;

    const usableWidth =
      pageWidth - margin * 2;

    const usableHeight =
      pageHeight - margin * 2;

    const imgWidth = usableWidth;

    const imgHeight =
      (canvas.height * imgWidth) /
      canvas.width;

    let heightLeft = imgHeight;

    let position = margin;

    /* First Page */

    pdf.addImage(
      imgData,
      "PNG",
      margin,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= usableHeight;

    /* Extra Pages */

    while (heightLeft > 0) {

      position =
        heightLeft - imgHeight + margin;

      pdf.addPage();

      pdf.addImage(
        imgData,
        "PNG",
        margin,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= usableHeight;

    }

    pdf.save("biodata.pdf");

  }
  catch (error) {

    console.error(error);

  }

};

export default exportToPDF;