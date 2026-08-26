import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditionals',
  imports: [],
  templateUrl: './conditionals.component.html',
  styleUrl: './conditionals.component.css'
})
export class ConditionalsComponent implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT CONDITIONALS");

    // 1. if CONDITION
    const age: number = 20;

    if (age >= 18) {
      console.log("Adult");
    }

    // 2. if else
    const marks: number = 35;

    if (marks >= 40) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }

    // 3. else if
    const score: number = 85;

    if (score >= 90) {
      console.log("Grade A");
    } else if (score >= 70) {
      console.log("Grade B");
    } else {
      console.log("Grade C");
    }

    // 4. LOGICAL OPERATORS
    const isLoggedIn: boolean = true;
    const isAdmin: boolean = true;

    if (isLoggedIn && isAdmin) {
      console.log("Admin Access");
    }

    // 5. TERNARY OPERATOR
    const userAge: number = 16;

    console.log(userAge >= 18 ? "Adult" : "Minor");

    // 6. SWITCH
    const day: string = "Monday";

    switch (day) {
      case "Monday":
        console.log("Start Working");
        break;

      case "Sunday":
        console.log("Holiday");
        break;

      default:
        console.log("Normal Day");
    }

    // 7. OPTIONAL CHAINING
    const user = {
      address: {
        city: "Bangalore"
      }
    };

    console.log(user?.address?.city);

    // 8. NULLISH COALESCING
    const userName: string | null = null;

    console.log(userName ?? "Guest User");

    // 9. REAL PROJECT EXAMPLE
    const employee = {
      employeeName: "Akhil",
      isEmployeeActive: true,
      role: "Admin"
    };

    if (employee.isEmployeeActive && employee.role === "Admin") {
      console.log("Admin Access Granted");
    } else {
      console.log("Access Denied");
    }

  }
}
