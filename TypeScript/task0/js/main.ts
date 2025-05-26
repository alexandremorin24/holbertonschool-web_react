interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "Here",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    location: "There",
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");

// Add header
const header = table.insertRow();
const headerFirstName = header.insertCell();
const headerLocation = header.insertCell();
headerFirstName.innerHTML = "<strong>First Name</strong>";
headerLocation.innerHTML = "<strong>Location</strong>";

// Add each student
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

// Append table to body
document.body.appendChild(table);
