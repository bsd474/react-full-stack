import "../index.css";
import Employee from "../components/Employee";
import React, { useState } from "react";
import AddEmployee from "../components/AddEmployee";
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "../components/EditEmployee";

const showEmployee = true;
function Employees() {
  // eslint-disable-next-line no-unused-vars
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Bader",
      role: "Intern",
      img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "Sam",
      role: "Lawyer",
      img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1044&q=80",
    },
    {
      id: 3,
      name: "William",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1500649297466-74794c70acfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      name: "Darren",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1500649297466-74794c70acfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 5,
      name: "Michelle",
      role: "Lawyer",
      img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1044&q=80",
    },
    {
      id: 6,
      name: "Mickey",
      role: "",
      img: "",
    },
    {
      id: 7,
      name: "Sammy",
      role: "",
      img: "",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updateEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return {
          ...employee,
          name: newName,
          role: newRole,
        };
      }
      return employee;
    });
    setEmployees(updateEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <main>
      {showEmployee ? (
        <>
          <AddEmployee newEmployee={newEmployee} />
          <div className="flex flex-wrap">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </main>
  );
}

export default Employees;
