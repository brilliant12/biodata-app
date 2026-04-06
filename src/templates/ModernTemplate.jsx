import { useBiodata } from "../context/BiodataContext";
import { religionHeaders } from "../utils/religionHeaders";
import { formatDobWithAge } from "../utils/dateUtils";
function ModernTemplate() {
  const { formData } = useBiodata();

  const {
    personal,
    family,
    education,
    horoscope,
    partner,
    photo,
    otherDetails,
  } = formData;
  const headerText =
    religionHeaders[personal.religion] || religionHeaders["Other"];
  return (
    <div
      className="template-outer-container"
      style={{
        display: "flex",
        minHeight: "1123px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* LEFT SIDEBAR */}

      <div
        style={{
          width: "260px",
          background: "#2c3e50",
          color: "#fff",
          padding: "20px",
        }}
      >
        {photo && (
          <img
            src={photo}
            alt="profile"
            style={{
              width: "140px",
              height: "160px",
              objectFit: "cover",
              borderRadius: "6px",
              marginBottom: "20px",
            }}
          />
        )}

        <SidebarRow label="Name" value={personal.name} />
        <SidebarRow
          label="DOB"
          value={personal.dob ? formatDobWithAge(personal.dob) : ""}
        />
        <SidebarRow label="City" value={personal.city} />
        <SidebarRow label="Religion" value={personal.religion} />
        <SidebarRow label="Caste" value={personal.caste} />
      </div>

      {/* RIGHT CONTENT */}

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "600",
            color: "#8b5e3c",
            marginBottom: "10px",
            fontFamily: "Georgia, serif",
          }}
        >
          {headerText}
        </div>

        <Section title="Education">
          <Row label="Degree" value={education.degree} />
          <Row label="University" value={education.university} />
          <Row label="Profession" value={education.profession} />
          <Row label="Company" value={education.company} />
        </Section>

        <Section title="Family">
          <Row label="Father" value={family.father} />
          <Row label="Mother" value={family.mother} />
          <Row label="Siblings" value={family.siblings} />
        </Section>

        <Section title="Horoscope">
          <Row label="Rashi" value={horoscope.rashi} />
          <Row label="Manglik" value={horoscope.manglik} />
          <Row label="Gotra" value={horoscope.gotra} />
        </Section>

        <Section title="Partner Expectation">
          <Row label="Age" value={`${partner.ageFrom} - ${partner.ageTo}`} />

          <Row label="Expectation" value={partner.expectation} />
        </Section>
        {otherDetails?.some((d) => d.label) && (
          <Section title="Other Details">
            {otherDetails.map(
              (item, index) =>
                item.label && (
                  <Row key={index} label={item.label} value={item.value} />
                ),
            )}
          </Section>
        )}
      </div>
    </div>
  );
}

export default ModernTemplate;

function Header({ title }) {
  return (
    <h2
      style={{
        borderBottom: "2px solid #2c3e50",
        paddingBottom: "8px",
        marginBottom: "20px",
      }}
    >
      {title}
    </h2>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h5
        style={{
          background: "#ecf0f1",
          padding: "6px",
        }}
      >
        {title}
      </h5>

      {children}
    </div>
  );
}

function Row({ label, value }) {
  if (!value) return null;

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "8px",
        borderBottom: "1px solid #f0f0f0",
        paddingBottom: "4px",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          width: "180px",
          fontWeight: "bold",
          color: "#2c3e50",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "15px",
        }}
      >
        <span>{label}</span>
        <span>:</span>
      </div>

      <div style={{ flex: 1, color: "#34495e" }}>{value}</div>
    </div>
  );
}

function SidebarRow({ label, value }) {
  if (!value) return null;

  return (
    <div style={{ marginBottom: "6px" }}>
      <div
        style={{
          fontSize: "12px",
          opacity: 0.7,
        }}
      >
        {label}
      </div>

      <div>{value}</div>
    </div>
  );
}
