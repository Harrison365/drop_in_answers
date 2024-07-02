/*It's time to see if we can host our party!

Before the party is confirmed, the shareholders need two criteria to be met:

At least 5 people must be in attendance
At least £100 must be generated via pay-what-you-want ticket sales
The isPartyViable function will be called with an array of guest objects. Each of those objects has a paidForTicket property with a number representing how much they are willing to pay for their ticket.

It should return a boolean value of false if not enough people are attending or attendees don't spend enough money on tickets, and true if enough people are attending and they spend enough money on tickets.

Examples:

const guests = [
  { name: "diya", paidForTicket: 15 },
  { name: "amul", paidForTicket: 2 },
  { name: "saleh", paidForTicket: 2 },
  { name: "philippa", paidForTicket: 30 },
]
isPartyViable(guests);
// should return false

const guests = [
  { name: "diya", paidForTicket: 15 },
  { name: "amul", paidForTicket: 2 },
  { name: "saleh", paidForTicket: 2 },
  { name: "philippa", paidForTicket: 30 },
  { name: "kev", paidForTicket: 6 },
  { name: "sarah", paidForTicket: 11 },
]
isPartyViable(guests);
// should return false

const guests = [
  { name: "diya", paidForTicket: 15 },
  { name: "amul", paidForTicket: 20 },
  { name: "saleh", paidForTicket: 2 },
  { name: "philippa", paidForTicket: 30 },
  { name: "kev", paidForTicket: 26 },
  { name: "sarah", paidForTicket: 11 },
]
isPartyViable(guests);
// should return true */

//Check that there are 5 people going and they want to spend £100 (true/false).

const example = [
  { name: "diya", paidForTicket: 15 },
  { name: "amul", paidForTicket: 20 },
  { name: "saleh", paidForTicket: 2 },
  { name: "philippa", paidForTicket: 30 },
  { name: "kev", paidForTicket: 26 },
  { name: "sarah", paidForTicket: 11 },
];

function isPartyViable(guests) {
  if (guests.length < 5) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < guests.length; i++) {
    count += guests[i].paidForTicket;
  }
  if (count < 100) {
    return false;
  }
  return true;
}

console.log(isPartyViable(example));
