const user = {
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com"
};

const app = document.getElementById("app");

const heading = document.createElement("h2");
heading.textContent = "User Information";

const nameP = document.createElement("p");
nameP.textContent = "Name: " + user.name;

const ageP = document.createElement("p");
ageP.textContent = "Age: " + user.age;

const emailP = document.createElement("p");
emailP.textContent = "Email: " + user.email;

app.appendChild(heading);
app.appendChild(nameP);
app.appendChild(ageP);
app.appendChild(emailP);