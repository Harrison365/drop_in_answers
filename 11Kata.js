// Northcoders want to have a party, and have enlisted the use of your savvy coding skills to help them!

// Uh oh - you're ready to send out your invitations when you spot some typos...

// Some of the names from your database don't have capital letters, so you need to make sure you capitalise the first letter of all of the guests names.

// Your greetGuest function will take a string of a first name and should return a string of a greeting with the capitalised name, as shown in the example below.

// Examples:

// greetGuest("Douglas");
// // returns 'Hello Douglas!'

// greetGuest("maddie");
// // returns 'Hello Maddie!'

// greetGuest("poonam");
// // returns 'Hello Poonam!'

// // If the name is "" return "Hello !"

function greetGuest(name) {
  if (name === "") {
    return "Hello !";
  }
  const newName = name[0].toUpperCase() + name.slice(1);
  return "Hello " + newName + "!";
}
