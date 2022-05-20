// Write your solution in this file!
const employee = {
  name: "Ash",
  streetAddress: "123 Main",
};

//Function One - COMPLETE
function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}
updateEmployeeWithKeyAndValue(employee, "Sam", "11 Broadway");

//function two
function destructivelyUpdateEmployeeWithKeyAndValue() {
  employee.name = "Sam";
  employee.streetAddress = "12 Broadway";

  return employee;
}

//function three
function deleteFromEmployeeByKey(obj, key, value) {
  let newEmployee = {
    ...obj,
    [key]: value,
  };
  delete newEmployee.name;
  return newEmployee;
}


//function four - COMPLETE
function destructivelyDeleteFromEmployeeByKey() {
  delete employee.name;
  return employee;
}
