import { Card, ProgressBar } from "react-bootstrap";
import { useMemo } from "react";
import { useBiodata } from "../context/BiodataContext";

function FormProgress() {

  const { formData } = useBiodata();

  const percent = useMemo(() => {

    let completed = 0;
    let total = 0;

    // PERSONAL
    if (formData.personal) {

      total += 5;

      if (formData.personal.name) completed++;
      if (formData.personal.gender) completed++;
      if (formData.personal.dob) completed++;
      if (formData.personal.height) completed++;
      if (formData.personal.religion) completed++;

    }

    // FAMILY
    if (formData.family) {

      total += 3;

      if (formData.family.father) completed++;
      if (formData.family.mother) completed++;
      if (formData.family.familyType) completed++;

    }

    // EDUCATION
    if (formData.education) {

      total += 2;

      if (formData.education.degree) completed++;
      if (formData.education.occupation) completed++;

    }

    // HOROSCOPE
    if (formData.horoscope) {

      total += 2;

      if (formData.horoscope.rashi) completed++;
      if (formData.horoscope.nakshatra) completed++;

    }

    // PARTNER
    if (formData.partner) {

      total += 2;

      if (formData.partner.ageFrom) completed++;
      if (formData.partner.ageTo) completed++;

    }

    if (total === 0) return 0;

    return Math.round(
      (completed / total) * 100
    );

  }, [formData]);

  const getVariant = () => {

    if (percent < 40) return "danger";
    if (percent < 70) return "warning";
    return "success";

  };

  return (

    <Card className="mb-3 shadow-sm border-0">

      <Card.Body>

        <div className="d-flex justify-content-between mb-2">

          <span className="fw-semibold">
            Profile Completion
          </span>

          <span className="fw-bold">
            {percent}%
          </span>

        </div>

        <ProgressBar
          now={percent}
          variant={getVariant()}
          animated={percent < 100}
        />

      </Card.Body>

    </Card>

  );

}

export default FormProgress;