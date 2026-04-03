export const required = (value) => {

  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "Required";
  }

  return null;

};



export const isNumber = (value) => {

  if (!value) return null;

  if (isNaN(value)) {
    return "Must be number";
  }

  return null;

};



export const validateAgeRange = (
  from,
  to
) => {

  if (!from || !to) return null;

  if (parseInt(from) > parseInt(to)) {
    return "Invalid age range";
  }

  return null;

};