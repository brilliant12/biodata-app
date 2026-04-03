import { useBiodata } from "../context/BiodataContext";

function ModernTemplate() {

  const { formData } = useBiodata();

  const {
    personal,
    family,
    education,
    horoscope,
    partner,
    photo
  } = formData;

  return (

    <div
      style={{
        display: "flex",
        minHeight: "1123px",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >

      {/* LEFT SIDEBAR */}

      <div
        style={{
          width: "260px",
          background: "#2c3e50",
          color: "#fff",
          padding: "20px"
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
              marginBottom: "20px"
            }}
          />

        )}

        <SidebarRow label="Name" value={personal.name} />
        <SidebarRow label="DOB" value={personal.dob} />
        <SidebarRow label="City" value={personal.city} />
        <SidebarRow label="Religion" value={personal.religion} />
        <SidebarRow label="Caste" value={personal.caste} />

      </div>

      {/* RIGHT CONTENT */}

      <div
        style={{
          flex: 1,
          padding: "30px"
        }}
      >

        <Header title="Modern Biodata" />

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

          <Row
            label="Age"
            value={`${partner.ageFrom} - ${partner.ageTo}`}
          />

          <Row
            label="Expectation"
            value={partner.expectation}
          />

        </Section>

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
        marginBottom: "20px"
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
          padding: "6px"
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

    <div style={{ display: "flex" }}>

      <div style={{ width: "160px", fontWeight: "bold" }}>
        {label}
      </div>

      <div>{value}</div>

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
          opacity: 0.7
        }}
      >
        {label}
      </div>

      <div>
        {value}
      </div>

    </div>

  );

}