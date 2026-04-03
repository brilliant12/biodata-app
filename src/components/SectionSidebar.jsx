import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faGraduationCap,
  faStar,
  faRing
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    id: "personal",
    label: "Personal Details",
    icon: faUser
  },
  {
    id: "family",
    label: "Family Details",
    icon: faUsers
  },
  {
    id: "education",
    label: "Education",
    icon: faGraduationCap
  },
  {
    id: "horoscope",
    label: "Horoscope",
    icon: faStar
  },
  {
    id: "partner",
    label: "Partner Expectation",
    icon: faRing
  }
];

function SectionSidebar() {

  const scrollToSection = (id) => {

    const element =
      document.getElementById(id);

    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  };

  return (

    <div className="sidebar-container">

      <Nav className="flex-column">

        {sections.map((section) => (

          <Nav.Link
            key={section.id}
            onClick={() =>
              scrollToSection(section.id)
            }
            className="sidebar-link"
          >

            <FontAwesomeIcon
              icon={section.icon}
              className="me-2"
            />

            {section.label}

          </Nav.Link>

        ))}

      </Nav>

    </div>

  );

}

export default SectionSidebar;