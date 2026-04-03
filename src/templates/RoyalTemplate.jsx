import { useBiodata } from "../context/BiodataContext";

function RoyalTemplate() {

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
        padding: "40px",
        fontFamily: "Georgia, serif"
      }}
    >

      {/* HEADER */}

      <div
        style={{
          background: "#bfa046",
          color: "#fff",
          padding: "12px",
          textAlign: "center",
          marginBottom: "20px"
        }}
      >

        <h2 style={{ margin: 0 }}>
          Royal Biodata
        </h2>

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >

        <div style={{ flex: 1 }}>

          <RoyalSection title="Personal">

            <RoyalRow label="Name" value={personal.name} />
            <RoyalRow label="DOB" value={personal.dob} />
            <RoyalRow label="City" value={personal.city} />
            <RoyalRow label="Occupation" value={personal.occupation} />

          </RoyalSection>

          <RoyalSection title="Family">

            <RoyalRow label="Father" value={family.father} />
            <RoyalRow label="Mother" value={family.mother} />
            <RoyalRow label="Siblings" value={family.siblings} />

          </RoyalSection>

          <RoyalSection title="Education">

            <RoyalRow label="Degree" value={education.degree} />
            <RoyalRow label="University" value={education.university} />

          </RoyalSection>

        </div>

        {photo && (

          <img
            src={photo}
            alt="profile"
            style={{
              width: "150px",
              height: "180px",
              objectFit: "cover",
              border: "4px solid #bfa046",
              marginLeft: "20px"
            }}
          />

        )}

      </div>

      <RoyalSection title="Partner Expectation">

        <RoyalRow
          label="Age"
          value={`${partner.ageFrom} - ${partner.ageTo}`}
        />

        <RoyalRow
          label="Expectation"
          value={partner.expectation}
        />

      </RoyalSection>

    </div>

  );

}

export default RoyalTemplate;



function RoyalSection({ title, children }) {

  return (

    <div style={{ marginBottom: "16px" }}>

      <h4
        style={{
          borderBottom: "2px solid #bfa046"
        }}
      >
        {title}
      </h4>

      {children}

    </div>

  );

}


function RoyalRow({ label, value }) {

  if (!value) return null;

  return (

    <div style={{ display: "flex" }}>

      <div
        style={{
          width: "150px",
          fontWeight: "bold"
        }}
      >
        {label}
      </div>

      <div>{value}</div>

    </div>

  );

}