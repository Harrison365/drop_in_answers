/* Northdrivers Taxi Company:tm: have asked for your help writing a function which will calculate the cost of getting to the party! Journeys are priced as follows:
Journeys up to 3 minutes long have a flat base rate cost of £5
Every minute  after the first 3 will cost an extra 70p
The length of the journey is always  rounded up to a whole number of minutes
The  calculateTaxiFare function should take a  number representing the length of a taxi journey in seconds, and return a  numberrepresenting the cost of that journey in  pence.

calculateTaxiFare(150);
// should return 500

calculateTaxiFare(360);
// should return 710

calculateTaxiFare(491);
// should return 920
*/

function taxiFare(seconds) {
  let minutes = seconds / 60;
  let roundedMins = Math.ceil(minutes);

  if (roundedMins <= 3) {
    return 500;
  } else {
    return 500 + (roundedMins - 3) * 70;
  }
}
console.log(taxiFare(150));
console.log(taxiFare(360));
console.log(taxiFare(491));
