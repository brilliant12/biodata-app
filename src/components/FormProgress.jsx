import { Card, ProgressBar } from "react-bootstrap";
import { useMemo } from "react";
import { useBiodata } from "../context/BiodataContext";

function FormProgress() {
  const { formData } = useBiodata();

  const percent = useMemo(() => {
    let completed = 0;
    let total = 0;

    if (formData.personal) {
      total += 5;
      if (formData.personal.name) completed++;
      if (formData.personal.gender) completed++;
      if (formData.personal.dob) completed++;
      if (formData.personal.height) completed++;
      if (formData.personal.religion) completed++;
    }

    if (formData.family) {
      total += 3;
      if (formData.family.father) completed++;
      if (formData.family.mother) completed++;
      if (formData.family.familyType) completed++;
    }

    if (formData.education) {
      total += 2;
      if (formData.education.degree) completed++;
      if (formData.education.occupation) completed++;
    }

    if (formData.horoscope) {
      total += 2;
      if (formData.horoscope.rashi) completed++;
      if (formData.horoscope.nakshatra) completed++;
    }

    if (formData.partner) {
      total += 2;
      if (formData.partner.ageFrom) completed++;
      if (formData.partner.ageTo) completed++;
    }

    return total === 0 ? 0 : Math.round((completed / total) * 100);
  }, [formData]);

  return (
    <Card className="mb-3 shadow-sm border-0 bg-light rounded-3 overflow-hidden">
      <Card.Body className="p-2 px-3">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px', color: '#64748b' }}>
            Profile Progress
          </span>
          <span className="fw-bold" style={{ fontSize: '11px', color: 'var(--primary-indigo)' }}>
            {percent}%
          </span>
        </div>
        
        <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '10px' }}>
          <div 
            style={{ 
              width: `${percent}%`, 
              height: '100%', 
              backgroundColor: 'var(--primary-indigo)', 
              transition: 'width 0.5s ease',
              borderRadius: '10px'
            }} 
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default FormProgress;