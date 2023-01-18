// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

import { brands } from './data.js';

// **WITHOUT REDUCE**
// export const getSneaks = (brands) => {
//   let sneaks = [];
//   for (let brand of brands) {
//     sneaks = [...sneaks, ...brand.shoes];
//     console.log('sneaks at end of loop', sneaks);
//   }
//   return sneaks;
// };

// **WITH REDUCE**
export const getSneaks = (brands) => {
  return brands.reduce((acc, brand) => [...acc, ...brand.shoes], []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce

// **ALTERNATE**
// export const getAverageAge = (dogs) => {
//   const totalDogs = dogs.length;
//   const totalYears = dogs.reduce((acc, dog) => (acc += dog.age), 0);
//   return totalYears / totalDogs;
// };
export const getAverageAge = (dogs) => {
  return dogs.reduce((acc, dog) => (acc += dog.age), 0) / dogs.length;
};
