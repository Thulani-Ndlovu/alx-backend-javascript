// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Student 1 object
const student1: Student = {
  firstName: "Thulani",
  lastName: "Ndlovu",
  age: 26,
  location: "South Africa",
};

// Student 2 object
const student2: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "United States",
};


const studentsList: Student[] = [student1, student2];

// Rendering a table using Vanilla JavaScript
const table = document.createElement("table");

// Appending header row
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";

// Appending a new row for each student in the array
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
