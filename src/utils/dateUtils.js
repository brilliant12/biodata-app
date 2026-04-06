// utils/dateUtils.js

/**
 * Calculate age from DOB
 * @param {string|Date} dob
 * @returns {number} age
 */

export const calculateAge = (dob) => {

  if (!dob) return "";

  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff =
    today.getMonth() - birthDate.getMonth();

  // Adjust age if birthday not yet occurred this year
  if (
    monthDiff < 0 ||
    (monthDiff === 0 &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;

};
export const formatDobWithAge = (dob) => {

  if (!dob) return "";

  const age = calculateAge(dob);

  const formattedDate =
    new Date(dob).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }
    );

  return `${formattedDate} (${age} Years)`;

};