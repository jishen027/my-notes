## a Javascript class for generating PDFs on the fly

## using the JSPDF library and html2canvas

```javascript
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import esv_logo from "../assets/images/logo_esv.png";

class PDFGenerator {
  constructor() {
    this.pdf = new jsPDF();
    this.currentY = 20;
  }

  convertToImage(element) {
    return html2canvas(element, {
      backgroundColor: "#fff",
      scale: 10,
    });
  }

  checkAndAddNewPage(height) {
    if (this.currentY + height > 297) {
      this.pdf.addPage();
      this.currentY = 10;
      this.addHeader(); // Add the header to each new page
      this.addFooter(); // Add the footer to each new page
    }
  }

  async addPieCharts(elements, width, height) {
    const canvases = await Promise.all(
      elements.map((element) => this.convertToImage(element))
    );
    // add pie charts to pdf by looping through the canvases, two charts per row
    canvases.forEach((canvas, index) => {
      const x = index % 2 === 0 ? 10 : 110;
      const y = Math.floor(index / 2) * 100 + this.currentY;
      this.checkAndAddNewPage(height);
      this.pdf.addImage(canvas, "JPEG", x, y, width, height);
    });
    this.currentY += Math.ceil(canvases.length / 2) * 100 + 10;
  }

  async addBarChart(element, width, height) {
    const image = await this.convertToImage(element);

    this.checkAndAddNewPage(height);
    this.pdf.addImage(image, "JPEG", 10, this.currentY, width, height);
    this.currentY += height + 10;
  }

  async addMatrixChart(element, width, height) {
    const image = await this.convertToImage(element);
    this.checkAndAddNewPage(height);
    this.pdf.addImage(image, "JPEG", 10, this.currentY, width, height);
    this.currentY += height + 10;
  }

  addText(text, fontSize, fontStyle, align, maxWidth) {
    this.checkAndAddNewPage(fontSize);
    this.pdf.setFontSize(fontSize);
    this.pdf.setFont("helvetica", fontStyle);
    this.pdf.text(text, 10, this.currentY, { align, maxWidth });
    this.currentY += fontSize + 10;
  }

  addHeader() {
    this.pdf.addImage(esv_logo, "PNG", 10, 5, 50, 10);
    this.pdf.setFontSize(20);
    this.pdf.setFont("helvetica", "bold");
    this.pdf.text("Analytics", 70, 10);
    this.currentY = 20;
  }

  addFooter() {
    const pageCount = this.pdf.internal.getNumberOfPages();
    this.pdf.setFontSize(10);
    this.pdf.setFont("helvetica", "normal");
    this.pdf.text(
      `Page ${pageCount}`,
      this.pdf.internal.pageSize.width - 20,
      this.pdf.internal.pageSize.height - 10,
      { align: "right" }
    );
    // Other footer content goes here
  }

  addBreakLine() {
    this.currentY += 10;
    this.pdf.line(10, this.currentY, 200, this.currentY);
  }

  savePDF(title) {
    this.pdf.save(`${title}-analytics.pdf`);
  }
}

export default PDFGenerator;
```

## Usage

```javascript
import PDFGenerator from "./PDFGenerator";

const pdfGenerator = new PDFGenerator();

pdfGenerator.addHeader();
pdfGenerator.addText("Some text", 12, "normal", "left", 100);
pdfGenerator.addBreakLine();
pdfGenerator.addText("Some more text", 12, "normal", "left", 100);
pdfGenerator.addBreakLine();
pdfGenerator.addText("Some more text", 12, "normal", "left", 100);
```
