import { createContext, useContext, useState } from "react";

const BiodataContext = createContext();

export const BiodataProvider = ({ children }) => {

  const [template, setTemplate] = useState("classic");

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

export const useBiodata = () =>
  useContext(BiodataContext);