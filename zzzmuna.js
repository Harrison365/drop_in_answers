// const example = [
//     {
//       firstName: "Noah",
//       lastName: "M.",
//       country: "Switzerland",
//       continent: "Europe",
//       age: 19,
//       language: "C",
//     },
//     {
//       firstName: "Anna",
//       lastName: "R.",
//       country: "Liechtenstein",
//       continent: "Europe",
//       age: 52,
//       language: "JavaScript",
//     },
//     {
//       firstName: "Ramon",
//       lastName: "R.",
//       country: "Paraguay",
//       continent: "Americas",
//       age: 29,
//       language: "Ruby",
//     },
//     {
//       firstName: "George",
//       lastName: "B.",
//       country: "England",
//       continent: "Europe",
//       age: 81,
//       language: "C",
//     },
//   ];

//   Return an object of how often each language is used:

function countLanguages(list) {
  let languageCounts = {};

  for (let i = 0; i < list.length; i++) {
    if (languageCounts[list[i].language]) {
      languageCounts[list[i].language]++;
    } else {
      languageCounts[list[i].language] = 1;
    }
  }

  return languageCounts;
}

console.log(
  countLanguages([
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
    },
    {
      firstName: "Ramon",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
    },
  ])
);
