import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objects',
  imports: [],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.css'
})
export class ObjectsComponent implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT OBJECTS");

    // 1. SIMPLE OBJECT
    const student = {
      name: "Akhil",
      age: 25,
      city: "Bangalore"
    };
    console.log(student);

    // 2. ACCESS OBJECT VALUES
    console.log(student.name);
    console.log(student.age);
    console.log(student.city);

    // 3. UPDATE OBJECT VALUE
    student.city = "Delhi";
    console.log(student);

    // 4. ADD NEW PROPERTY
    const employee: {
      name: string;
      department: string;
      email?: string;
    } = {
      name: "Akhil",
      department: "IT"
    };
    employee.email = "akhil@gmail.com";
    console.log(employee);

    // 5. OBJECT INSIDE OBJECT
    const user = {
      name: "Akhil",
      address: {
        city: "Bangalore",
        state: "Karnataka"
      }
    };
    console.log(user.address.city);

    // 6. FUNCTION INSIDE OBJECT
    const calculator = {
      add(a: number, b: number): number {
        return a + b;
      }
    };
    console.log(calculator.add(10, 20));

    // 7. ARRAY OF OBJECTS
    const employees = [
      { id: 1, name: "Akhil" },
      { id: 2, name: "Rahul" }
    ];
    console.log(employees);

    // 8. REAL PROJECT EXAMPLE
    const employeeData = {
      employeeId: 101,
      employeeName: "Akhil",
      employeeSkills: ["JavaScript", "Angular"],
      isEmployeeActive: true
    };
    console.log(employeeData);

  }
}