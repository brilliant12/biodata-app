import { createContext, useContext, useState, useEffect } from "react";
import { mockBiodata } from "../utils/mockData";

const BiodataContext = createContext();

export const BiodataProvider = ({ children, initialTemplate }) => {
  const [template, setTemplate] = useState(initialTemplate || "classic");
  const [formData, setFormData] = useState({
    personal: {
      name: "",
      gender: "",
      dob: "",
      height: "",
      religion: "",
      caste: "",
      occupation: "",
      income: "",
      city: ""
    },
    family: {
      father: "",
      mother: "",
      siblings: "",
      familyType: "",
      familyStatus: ""
    },
    education: {
      degree: "",
      university: "",
      profession: "",
      company: ""
    },
    horoscope: {
      rashi: "",
      nakshatra: "",
      manglik: "",
      gotra: ""
    },
    partner: {
      ageFrom: "",
      ageTo: "",
      height: "",
      expectation: ""
    },
    otherDetails: [
      { label: "", value: "" }
    ],
    photo: null
  });

  // Check for mock parameter to load sample data
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("mock") === "true") {
      setFormData(mockBiodata);
    }
  }, []);

  return (
    <BiodataContext.Provider
      value={{
        template,
        setTemplate,
        formData,
        setFormData
      }}
    >
      {children}
    </BiodataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBiodata = () =>
  useContext(BiodataContext);