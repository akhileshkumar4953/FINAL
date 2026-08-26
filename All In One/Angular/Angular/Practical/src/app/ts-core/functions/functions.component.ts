import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  imports: [],
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.css'
})
export class FunctionsComponent implements OnInit {


  ngOnInit(): void {

    console.log("TYPESCRIPT FUNCTIONS");

    // 1. NORMAL FUNCTION
    function greetUser(): void {
      console.log("Welcome User");
    }
    greetUser();

    // 2. FUNCTION WITH PARAMETERS
    function add(a: number, b: number): void {
      console.log(a + b);
    }
    add(10, 20);


    // 3. FUNCTION WITH RETURN
    function multiply(a: number, b: number): number {
      return a * b;
    }
    const result: number = multiply(5, 4);
    console.log(result);

    // 4. FUNCTION EXPRESSION
    const sayHello = function (): void {
      console.log("Hello World");
    };
    sayHello();

    // 5. ARROW FUNCTION
    const subtract = (a: number, b: number): number => a - b;
    console.log(subtract(20, 5));

    // 6. ANONYMOUS FUNCTION
    setTimeout(function (): void {
      console.log("Anonymous Function");
    }, 1000);

    // 7. CALLBACK FUNCTION
    function processUser(
      name: string,
      callback: () => void
    ): void {

      console.log("Processing:", name);
      callback();
    }

    processUser("Akhil", function (): void {
      console.log("Callback Function Executed");
    });

    // 8. ARRAY METHODS WITH FUNCTIONS
    const numbers: number[] = [1, 2, 3, 4, 5];
    numbers.forEach(function (num: number): void {
      console.log(num);
    });

    // 9. MAP FUNCTION
    const doubled: number[] =
      numbers.map((num: number) => num * 2);
    console.log(doubled);

    // 10. FILTER FUNCTION
    const evenNumbers: number[] =
      numbers.filter((num: number) => num % 2 === 0);
    console.log(evenNumbers);


    // 11. ASYNC FUNCTION
    async function fetchData(): Promise<string> {
      return "Data Loaded";
    }
    fetchData().then((data: string) => {
      console.log(data);
    });

    // 12. REAL PROJECT EXAMPLE
    function createEmployee(
      name: string,
      department: string
    ): {
      employeeName: string;
      employeeDepartment: string;
    } {

      return {
        employeeName: name,
        employeeDepartment: department
      };
    }

    const employee = createEmployee("Akhil", "IT");

    console.log(employee);

    // END

  }
}

