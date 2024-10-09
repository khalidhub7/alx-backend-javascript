interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Khalid",
    lastName: "Pro",
    age: 21,
    location: "Agadir"
};

const student2: Student = {
    firstName: "Vin",
    lastName: "Pro",
    age: 32,
    location: "Fes"
};

const studentsList: Student[] = [student1, student2];

// Rendering a table using Vanilla JavaScript
const table = document.createElement('table');
studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);

