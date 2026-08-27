import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-es6',
  imports: [],
  templateUrl: './es6.component.html',
  styleUrl: './es6.component.css'
})
export class ES6Component implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT ES6+");

    // 1. let & const
    const name: string = "Akhil";
    console.log(name);



    // 2. TEMPLATE LITERALS
    console.log(`Hello ${name}`);

    // 3. ARROW FUNCTION
    const add = (
      a: number,
      b: number
    ): number => a + b;
    console.log(add(10, 20));

    // 4. DESTRUCTURING
    const user = {
      age: 20,
      city: "Bangalore"
    };
    const { age, city } = user;
    console.log(age);
    console.log(city);

    // 5. SPREAD OPERATOR
    const nums: number[] = [1, 2];
    console.log([...nums, 3, 4]);

    // 6. DEFAULT PARAMETER
    function greet(
      msg: string = "Hi"
    ): void {
      console.log(msg);
    }
    greet();
    greet("Hello");

    // 7. OPTIONAL CHAINING
    const employee = {
      address: {
        city: "Delhi"
      }
    };
    console.log(
      employee.address?.city
    );

    // 8. NULLISH COALESCING
    const userName: string | null = null;
    console.log(
      userName ?? "Guest"
    );

  }
}