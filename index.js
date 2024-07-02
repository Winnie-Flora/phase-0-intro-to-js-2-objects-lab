const employee={
    name: "Alex",
    streetAddress: "1002",
};

function updateEmployeeWithKeyAndValue(employee,name,streetAddress){
    const copyEmployee={...employee};
    copyEmployee.name="Sam";
    copyEmployee.streetAddress="11 Broadway";
    return copyEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,streetAddress){
    employee.name="Sam";
    employee.streetAddress="12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, name){
    let newEmployee={...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}
