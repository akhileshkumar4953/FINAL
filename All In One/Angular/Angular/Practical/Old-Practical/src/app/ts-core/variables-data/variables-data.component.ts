import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-variables-data',
  imports: [],
  templateUrl: './variables-data.component.html',
  styleUrl: './variables-data.component.css'
})
export class VariablesDataComponent implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT VARIABLES");

    // // 1. let -Value can change
    // let city: string = "Bangalore";
    // console.log(city);
    // city = "Delhi1";
    // console.log(city);

    // 2. const - Value cannot change
    // const company: string = "Google";
    // console.log(company);
    // company = "Microsoft"; // ERROR

    // // 3. var (Old Way)- Avoid using var
    // var age: number = 25;
    // console.log(age);
    // age = 30;
    // console.log(age);

    // 4. STRING
    const userName: string = "Akhil";
    console.log(userName);
    console.log(typeof userName);

    // // 5. NUMBER
    // const marks: number = 95;
    // console.log(marks);
    // console.log(typeof marks);

    // // 6. BOOLEAN
    // const isActive: boolean = true;
    // console.log(isActive);
    // console.log(typeof isActive);

    // // 7. UNDEFINED
    // let salary: number | undefined;
    // console.log(salary);
    // console.log(typeof salary);

    // // 8. NULL
    // const data: null = null;
    // console.log(data);

    // // 9. ARRAY
    // const skills: string[] = ["JS", "TS", "Angular"];
    // console.log(skills);

    // // 10. OBJECT
    // const employee: {
    //   id: number;
    //   name: string;
    //   department: string;
    // } = {
    //   id: 101,
    //   name: "Akhil",
    //   department: "IT"
    // };
    // console.log(employee);

    // // 11. FUNCTION
    // function greet(): void {
    //   console.log("Welcome User");
    // }
    // greet();

    // // 12. TEMPLATE LITERALS
    // const name: string = "Akhil";
    // const cityName: string = "Bangalore";
    // console.log(`My name is ${name} from ${cityName}`);

    // // 13. BLOCK SCOPE
    // {
    //   let message: string = "Inside Block";

    //   console.log(message);
    // }

    // // 14. REAL PROJECT EXAMPLE
    // const employeeData: {
    //   employeeId: number;
    //   employeeName: string;
    //   email: string;
    //   skills: string[];
    //   isEmployeeActive: boolean;
    // } = {
    //   employeeId: 101,
    //   employeeName: "Akhil",
    //   email: "akhil@gmail.com",
    //   skills: ["JavaScript", "React"],
    //   isEmployeeActive: true
    // };

    // console.log(employeeData);

    // END
  }
}