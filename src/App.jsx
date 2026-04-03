import { Container, Row, Col } from "react-bootstrap";

import { BiodataProvider } from "./context/BiodataContext";
import { Accordion } from "react-bootstrap";
//import TemplateSelector from "./components/TemplateSelector";
import "./styles/accordion.css";
import "./styles/preview.css";
import TemplateThumbnail from "./components/TemplateThumbnail";
import FormProgress from "./components/FormProgress";
import PersonalDetails from "./components/FormSections/PersonalDetails";
import FamilyDetails from "./components/FormSections/FamilyDetails";
import EducationDetails from "./components/FormSections/EducationDetails";
import HoroscopeDetails from "./components/FormSections/HoroscopeDetails";
import PartnerExpectation from "./components/FormSections/PartnerExpectation";

import PhotoUploader from "./components/PhotoUploader";
import BiodataPreview from "./components/BiodataPreview";
import ExportPDF from "./components/ExportPDF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faUsers,
  faGraduationCap,
  faStar,
  faRing
} from "@fortawesome/free-solid-svg-icons";
function App() {

  return (

    <BiodataProvider>

      <Container fluid className="p-3">

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