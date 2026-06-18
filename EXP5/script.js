let employees = [];


function addEmployee(){

    let name = document.getElementById("name").value;
    let empID = document.getElementById("id").value;
    let salary = document.getElementById("salary").value;
    let department = document.getElementById("department").value;

    if (name && empID && !isNaN(salary) && department) {
        employees.push({ name, id, salary, department });
        alert("Employee added successfully!");
      } else {
        alert("Please fill all fields correctly");
      }
}

function displayAll() {
  let html = "<h3>All Employees</h3><ul>";
  employees.forEach(emp => {
    html += `<li>${emp.name} (ID: ${emp.id}) - Salary: ${emp.salary}, Dept: ${emp.department}</li>`;
  });
  html += "</ul>";
  document.getElementById("output").innerHTML = html;
}

function filterSalary() {
  let html = "<h3>Employees with Salary > 500000</h3><ul>";
  employees.filter(emp => emp.salary > 500000).forEach(emp => {
    html += `<li>${emp.name} - ${emp.salary}</li>`;
  });
  html += "</ul>";
  document.getElementById("output").innerHTML = html;
}



