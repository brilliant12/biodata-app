import { Container, Row, Col } from "react-bootstrap";

import { BiodataProvider } from "./context/BiodataContext";
import { Accordion } from "react-bootstrap";
import { lazy, Suspense } from "react";
//import TemplateSelector from "./components/TemplateSelector";
import "./styles/accordion.css";
import "./styles/preview.css";
import { useLocation } from "react-router-dom";
/* Lazy Components */

const TemplateThumbnail = lazy(() => import("./components/TemplateThumbnail"));

const FormProgress = lazy(() => import("./components/FormProgress"));

const PersonalDetails = lazy(
  () => import("./components/FormSections/PersonalDetails"),
);

const FamilyDetails = lazy(
  () => import("./components/FormSections/FamilyDetails"),
);

const EducationDetails = lazy(
  () => import("./components/FormSections/EducationDetails"),
);

const HoroscopeDetails = lazy(
  () => import("./components/FormSections/HoroscopeDetails"),
);

const PartnerExpectation = lazy(
  () => import("./components/FormSections/PartnerExpectation"),
);

const PhotoUploader = lazy(() => import("./components/PhotoUploader"));

const BiodataPreview = lazy(() => import("./components/BiodataPreview"));


const OtherDetails = lazy(
  () => import("./components/FormSections/OtherDetails"),
);
const ExportPDF = lazy(() => import("./components/ExportPDF"));
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faUsers,
  faGraduationCap,
  faStar,
  faRing,
  faCircleInfo ,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const templateId = params.get("template");

  return (
    <BiodataProvider initialTemplate={templateId}>
      <Container fluid className="bg-white min-vh-100 p-0">
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Row className="g-0">
          <Col 
            md={4} 
            className="sidebar-scroll border-end-md" 
            style={{ 
              height: window.innerWidth > 768 ? "100vh" : "auto", 
              overflowY: "auto", 
              padding: "16px",
              backgroundColor: "#fff"
            }}
          >
            <div className="mb-3 px-1">
              <h5 className="fw-bold mb-0">Biodata Builder</h5>
              <p className="text-muted small mb-0">Fill details to preview</p>
            </div>

            <FormProgress />
            <TemplateThumbnail />
            <PhotoUploader />
            
            <Accordion defaultActiveKey="0" className="mt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faUser} />
                  Personal Info
                </Accordion.Header>
                <Accordion.Body className="p-3">
                  <PersonalDetails />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faUsers} />
                  Family Info
                </Accordion.Header>
                <Accordion.Body className="p-3">
                  <FamilyDetails />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faGraduationCap} />
                  Education & Career
                </Accordion.Header>
                <Accordion.Body className="p-3">
                  <EducationDetails />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faStar} />
                  Horoscope
                </Accordion.Header>
                <Accordion.Body className="p-3">
                  <HoroscopeDetails />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faRing} />
                  Partner Expectations
                </Accordion.Header>
                <Accordion.Body className="p-3">
                  <PartnerExpectation />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <FontAwesomeIcon icon={faCircleInfo} />
                  Other Info
                </Accordion.Header>
                <Accordion.Body className="p-3">
                  <OtherDetails />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
            <div className="mt-3 pb-3">
              <ExportPDF />
            </div>
          </Col>

          <Col md={8} className="preview-workspace">
            <BiodataPreview />
          </Col>
        </Row>
      </Container>
    </BiodataProvider>
  );
}

export default App;
