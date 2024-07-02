/* Gathering Feedback
Phew! All your hard work paid off and the event was a success! Now that you have had some time to relax, it's time to consider the guests feedback.
You decide to break the feedback into three groups: positive (7-10), negative (0-3) or neutral (4-6).
The function  gatherFeedback takes an  array of arrays, each of these arrays contains both a string of the name of the attendee and a  numbershowing how they rated the party out of 10.
It should return an  object with three properties: a key of  positive with a value of the number of positive reviews; a key of  negative with a value of the  numberof negative reviews; and, a key of  neutral with a value of the  number of neutral reviews.
Examples:
gatherFeedback([['maddie', 10], ['jatinder', 3], ['rose', 6]]);
 // returns {positive: 1, negative: 1, neutral:1}

gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 10]]);
 // returns {positive: 3, negative: 0, neutral:0}

gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 1]]);
 // returns {positive: 2, negative: 1, neutral:0}
 */

// function gatherFeedback(feedbackArray) {
//   let countPostive = 0;
//   let countNegative = 0;
//   let countNeutral = 0; // creating a count- so make sure the count is zero
//   for (let i = 0; i < feedbackArray.length; i++) {
//     if (feedbackArray[i][1] < 4) {
//       countNegative++;
//     } else if (feedbackArray[i][1] > 3 && feedbackArray[i][1] < 7) {
//       countNeutral++;
//     } else if (feedbackArray[i][1] > 6 && feedbackArray[i][1] < 11) {
//       countPostive++;
//     }
//   }
//   return {
//     positive: countPostive,
//     negative: countNegative,
//     neutral: countNeutral,
//   };
// }
function gatherFeedback(feedbackArray) {
  let countPostive = 0;
  let countNegative = 0;
  let countNeutral = 0; // creating a count- so make sure the count is zero
  for (let i = 0; i < feedbackArray.length; i++) {
    if (feedbackArray[i][1] < 4) {
      countNegative++;
    } else if (feedbackArray[i][1] > 3 && feedbackArray[i][1] < 7) {
      countNeutral++;
    } else if (feedbackArray[i][1] > 6 && feedbackArray[i][1] < 11) {
      countPostive++;
    }
  }
  return {
    positive: countPostive,
    negative: countNegative,
    neutral: countNeutral,
  };
}
console.log(
  gatherFeedback([
    ["maddie", 10],
    ["jatinder", 10],
    ["rose", 1],
  ])
);
