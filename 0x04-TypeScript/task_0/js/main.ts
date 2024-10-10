interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const studentone: Student = {
  firstName: 'khalid',
  lastName: 'lougui',
  age: 21,
  location: 'agadir',
};
const studenttwo: Student = {
  firstName: 'otman',
  lastName: 'lougui',
  age: 15,
  location: 'agadir',
};
const studentsList: Student[] = [studentone, studenttwo];

// create table basics
const table: HTMLTableElement = document.createElement('table');
const titlerow: HTMLTableRowElement = document.createElement('tr');
const firstnamee: HTMLTableCellElement = document.createElement('th');
const locationn: HTMLTableCellElement = document.createElement('th');

firstnamee.textContent = 'first name';
locationn.textContent = 'location';

table.appendChild(titlerow);
titlerow.appendChild(firstnamee);
titlerow.appendChild(locationn);

// create row for each i in studentsList
studentsList.forEach((i) => {
  const datarow: HTMLTableRowElement = document.createElement('tr');
  const firstnameedata: HTMLTableCellElement = document.createElement('td');
  firstnameedata.textContent = i.firstName;

  const locationndata: HTMLTableCellElement = document.createElement('td');
  locationndata.textContent = i.location;

  datarow.appendChild(firstnameedata);
  datarow.appendChild(locationndata);
  table.appendChild(datarow);
});
// return table to body
document.body.appendChild(table);


// css table
const style: HTMLStyleElement = document.createElement('style');
style.textContent = `
table {
  width: 50%;
  margin: 20px 0;
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}
th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #7f8c8d;
  width: 50%;
}
th:last-child, td:last-child {
  border-right: none;
}
th {
  background-color: #3498db;
  color: white;
  text-transform: uppercase;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #ddd;
}
td {
  color: #555;
}
`;
document.head.appendChild(style);
