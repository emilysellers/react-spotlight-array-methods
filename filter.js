// INPUT: the array of countries from data.js
// OUTPUT: only countries in Oceania
// REQS: use .filter

// **ALTERNATES - INCLUDES, DESTRUCTURED**
// export const filterOceania = (countries) =>
//   countries.filter(({ continent }) => continent?.includes('Oceania'));

// export const filterOceania = (countries) => {
//   return countries.filter((continent) => country.continent === 'Oceania');
// };

export const filterOceania = (countries) =>
  countries.filter(({ continent }) => continent === 'Oceania');

// INPUT: the array of countries from data.js
// OUTPUT: only countries whose name that include the letters 'au'
// REQS: use .filter

// **NOT DESTRUCTURED and EXPLICIT RETURN**
// export const filterAu = (countries) => {
//   return countries.filter((country) => country.name.includes('au'));
// };

// **DESTRUCTURED and IMPLICIT RETURN**
export const filterAu = (countries) => countries.filter(({ name }) => name.includes('au'));

// INPUT: the array of dogs from data.js
// OUTPUT: only dogs that are 2 years old or younger
// REQS: use .filter
export const filterYoungDogs = (dogs) => {
  return dogs.filter(({ age }) => age <= 2);
};

// INPUT: the array of dogs from data.js
// OUTPUT: a list of names of dogs that are 2 years old or younger
// REQS: use .filter AND .map OR use your filterYoungDogs function and a map

// **ALTERNATE**
// export const getYoungDogNames = (dogs) => {
//   const filteredDogs = filterYoungDogs(dogs).map((dog) => dog.name);
//   return filteredDogs;
// };
export const getYoungDogNames = (dogs) => {
  return dogs.filter(({ age }) => age <= 2).map(({ name }) => name);
};
