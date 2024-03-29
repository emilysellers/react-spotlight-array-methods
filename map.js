// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

// **EXPLICIT RETURNS**
// export const getCountryNames = (countries) => {
//     const countryNames = countries.map((country) => return country.name);
//     return countryNames;
// };
// export const getCountryNames = (countries) => {
//   return countries.map((country) => country.name);
// };

// **IMPLICIT RETURN**
export const getCountryNames = (countries) => countries.map((country) => country.name);

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

// export const getCountryCodes = (countries) =>
//   countries.map((country) => [country.name, country.iso2]);

// **DESTRUCTRED**
export const getCountryCodes = (countries) => countries.map(({ name, iso2 }) => [name, iso2]);

// INPUT: the array of shoes from data.js
// OUTPUT: an array of the brands
// REQS: use .map

// **DESTRUCTRED**
// export const getBrands = (brands) => brands.map(({ brand }) => brand);

export const getBrands = (brands) => brands.map((brand) => brand.brand);
