const form = document.querySelector("form");



const fName = document.querySelector("input#firstName");

const lName = document.querySelector("input#lastName");

const email = document.querySelector("input#email");

const inputs = form.querySelectorAll('input')
// console.log(inputs)

const gbody = document.querySelector("tbody#guests");


// Make an array with sample data

const guests = [
  // {
  //   id: "1",
  //   firstName: "Diego",
  //   lastName: "Torres",
  //   email: "diegot_@gmail.com",
  // },
  // {
  //   id: "2",
  //   firstName: "John",
  //   lastName: "Smith",
  //   email: "Jith@gmail.com",
  // },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // inputs.forEach((input) => {
  //   if (input.value.trim() == '') {
  //     return
  //   } else {
  //     console.log(input.value);
  //   }
  // })

  // Add the Id, First name, Last name and email to the array
const newGuest = {
  id: guests.length + 1,
  firstName: fName.value,
  lastName: lName.value,
  email: email.value
}

guests.push(newGuest)

guestsDisplay()

fName.value = ''
lName.value = ''
email.value = ''


});

function guestsDisplay() {
  guests.forEach((guest) => {

  const guestFirst = guest.firstName;
  const guestLast = guest.lastName;
  const guestEmail = guest.email;
  console.log(guestFirst, guestLast, guestEmail);

  const tr = document.createElement("tr");

  // td.innerText = guestFirst + " " + guestLast + " " + guestEmail;
  // tr.appendChild(td);
  // console.log(tr);

  const tdFirst = document.createElement("td");
  tdFirst.innerText = guestFirst;

  const tdLast = document.createElement("td");
  tdLast.innerText = guestLast;

  const tdEmail = document.createElement("td");
  tdEmail.innerText = guestEmail;

  tr.appendChild(tdFirst);
  tr.appendChild(tdLast);
  tr.appendChild(tdEmail);
  console.log(tr);
  gbody.appendChild(tr);
});
}







// console.log(new Date());
