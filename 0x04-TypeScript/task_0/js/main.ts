interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentsList: Array<Student> = [
  { firstName: "ben", lastName: "tennyson", age: 16, location: "usa" },
  { firstName: "kevin", lastName: "levin", age: 17, location: "usa" },
];

// table header
const table = document.createElement("table");
const tRow = document.createElement("tr");

["firstName", "location"].forEach((i) => {
  const tHeader = document.createElement("th");
  tHeader.textContent = i;
  tRow.appendChild(tHeader);
});

// table data
table.appendChild(tRow);
studentsList.forEach((i) => {
  const tRowData = document.createElement("tr");
  [i.firstName, i.location].forEach((i) => {
    const td = document.createElement("td");
    td.textContent = i;
    tRowData.appendChild(td);
  });
  table.appendChild(tRowData);
});
document.body.append(table);

// css
const style = document.createElement("style");
style.textContent = `
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
table {
  width: 80%;
  max-width: 600px;
  border-collapse: collapse;
  font: 20px sans-serif;
  background: #fafafa;
}
th, td {
  padding: 15px;
  border: 2px solid #ccc;
  text-align: center;
}
@media (max-width: 600px) {
  table {
    width: 90%;
  }
}`;
document.head.appendChild(style);
