import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import PDF from "../../assets/Resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/Fawlty22/MJKPortfolio2/src/assets/Resume.pdf";
  
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row  style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={PDF} target="_blank" style={{width: "50%"}}>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume" >
          <Document className="resume-box" file={PDF}>
            <Page pageNumber={1} />
          </Document>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
