import { useBiodata } from "../context/BiodataContext";
import { religionHeaders } from "../utils/religionHeaders";
import { formatDobWithAge } from "../utils/dateUtils";
function ClassicTemplate() {
  const { formData } = useBiodata();

  const { personal, family, education, horoscope, partner, photo,otherDetails } = formData;
  const headerText =
    religionHeaders[personal.religion] || religionHeaders["Other"];
  return (
  <div
  style={{
    padding: "25px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
    border: "4px solid #c59d5f",
    position: "relative",
    height: "100%",
  
  }}
>
      

      <div
        style={{
          border: "1px solid #c59d5f",
          padding: "20px",
          height: "100%",
        }}
      >
        {/* Sanskrit Header */}

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

        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #000",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          {/* <h2
            style={{
              margin: 0,
              letterSpacing: "2px"
            }}
          >
            BIODATA
          </h2> */}

          {photo && (
            <img
              src={photo}
              alt="profile"
              style={{
                width: "120px",
                height: "140px",
                objectFit: "cover",
                border: "2px solid #000",
                padding: "3px",
                background: "#fff",
              }}
            />
          )}
        </div>

        {/* PERSONAL DETAILS */}

        <SectionTitle title="Personal Details" />

        <TableRow label="Name" value={personal.name} />
        <TableRow label="Date of Birth" value={personal.dob?formatDobWithAge(personal.dob):''} />
        <TableRow label="Height" value={personal.height} />
        <TableRow label="Religion" value={personal.religion} />
        <TableRow label="Caste" value={personal.caste} />
        <TableRow label="Occupation" value={personal.occupation} />
        <TableRow label="Income" value={personal.income} />
        <TableRow label="City" value={personal.city} />

        {/* FAMILY DETAILS */}

        <SectionTitle title="Family Details" />

        <TableRow label="Father" value={family.father} />
        <TableRow label="Mother" value={family.mother} />
        <TableRow label="Siblings" value={family.siblings} />
        <TableRow label="Family Type" value={family.familyType} />
        <TableRow label="Family Status" value={family.familyStatus} />

        {/* EDUCATION */}

        <SectionTitle title="Education & Career" />

        <TableRow label="Degree" value={education.degree} />
        <TableRow label="University" value={education.university} />
        <TableRow label="Profession" value={education.profession} />
        <TableRow label="Company" value={education.company} />

        {/* HOROSCOPE */}

        <SectionTitle title="Horoscope Details" />

        <TableRow label="Rashi" value={horoscope.rashi} />
        <TableRow label="Nakshatra" value={horoscope.nakshatra} />
        <TableRow label="Manglik" value={horoscope.manglik} />
        <TableRow label="Gotra" value={horoscope.gotra} />

        {/* PARTNER */}

        <SectionTitle title="Partner Expectation" />

        <TableRow
          label="Age Range"
          value={
            partner.ageFrom && partner.ageTo
              ? `${partner.ageFrom} - ${partner.ageTo}`
              : ""
          }
        />

        <TableRow label="Expected Height" value={partner.height} />

        <TableRow label="Expectation" value={partner.expectation} />
        {/* OTHER DETAILS */}

{otherDetails?.length > 0 && (

  <>
    <SectionTitle title="Other Details" />

    {otherDetails.map((item, index) => (

      item.label && (

        <TableRow
          key={index}
          label={item.label}
          value={item.value}
        />

      )

    ))}

  </>

)}
      </div>
    </div>
  );
}

export default ClassicTemplate;

/* Reusable Components */

function SectionTitle({ title }) {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "10px",
        fontWeight: "bold",
        borderBottom: "2px solid #444",
        paddingBottom: "4px",
        color: "#8b5e3c",
      }}
    >
      {title}
    </div>
  );
}

function TableRow({ label, value }) {
  if (!value) return null;

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "6px",
      }}
    >
      <div
        style={{
          width: "180px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {label}
      </div>

      <div
        style={{
          flex: 1,
        }}
      >
        {value}
      </div>
    </div>
  );
}
