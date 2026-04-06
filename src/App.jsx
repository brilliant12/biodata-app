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
      <Container fluid className="p-3">
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Row>
          <Col md={4} style={{ maxHeight: "100vh", overflowY: "auto" }}>
            <FormProgress />

            <TemplateThumbnail />

            <PhotoUploader />
          <Accordion defaultActiveKey="0" alwaysOpen>

  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <FontAwesomeIcon
        icon={faUser}
        className="me-2 text-primary"
      />
      Personal Details
    </Accordion.Header>

    <Accordion.Body>
      <PersonalDetails />
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="1">
    <Accordion.Header>
      <FontAwesomeIcon
        icon={faUsers}
        className="me-2 text-primary"
      />
      Family Details
    </Accordion.Header>

    <Accordion.Body>
      <FamilyDetails />
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="2">
    <Accordion.Header>
      <FontAwesomeIcon
        icon={faGraduationCap}
        className="me-2 text-primary"
      />
      Education
    </Accordion.Header>

    <Accordion.Body>
      <EducationDetails />
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="3">
    <Accordion.Header>
      <FontAwesomeIcon
        icon={faStar}
        className="me-2 text-primary"
      />
      Horoscope
    </Accordion.Header>

    <Accordion.Body>
      <HoroscopeDetails />
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="4">
    <Accordion.Header>
      <FontAwesomeIcon
        icon={faRing}
        className="me-2 text-primary"
      />
      Partner Expectation
    </Accordion.Header>

    <Accordion.Body>
      <PartnerExpectation />
    </Accordion.Body>
  </Accordion.Item>


  {/* FIXED — INSIDE ACCORDION */}

  <Accordion.Item eventKey="5">
    <Accordion.Header>
       <FontAwesomeIcon
        icon={faCircleInfo}
        className="me-2 text-primary"
      />
      Other Details
    </Accordion.Header>

    <Accordion.Body>
      <OtherDetails />
    </Accordion.Body>
  </Accordion.Item>

</Accordion>
            
            <ExportPDF />
          </Col>

          <Col md={8}>
            <BiodataPreview />
          </Col>
        </Row>
      </Container>
    </BiodataProvider>
  );
}

export default App;
