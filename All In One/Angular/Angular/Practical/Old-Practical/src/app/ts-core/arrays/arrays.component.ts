import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  imports: [],
  templateUrl: './arrays.component.html',
  styleUrl: './arrays.component.css'
})
export class ArraysComponent implements OnInit {

  ngOnInit(): void {

    console.log("TYPESCRIPT ARRAYS");

    // 1. SIMPLE ARRAY
    const fruits: string[] = [
      "Apple",
      "Banana",
      "Mango"
    ];
    console.log(fruits);

    // 2. ACCESS ARRAY VALUES
    console.log(fruits[0]);
    console.log(fruits[1]);

    // 3. ADD ITEM - push()
    fruits.push("Orange");
    console.log(fruits);

    // 4. REMOVE ITEM - pop()
    fruits.pop();
    console.log(fruits);

    // 5. LOOP THROUGH ARRAY
    for (const fruit of fruits) {
      console.log(fruit);
    }

    // 6. ARRAY OF OBJECTS
    const employees: {
      id: number;
      name: string;
    }[] = [
        {
          id: 1,
          name: "Akhil"
        },
        {
          id: 2,
          name: "Rahul"
        }
      ];
    console.log(employees);

    // 7. MAP METHOD
    const numbers: number[] = [1, 2, 3, 4, 5];

    const doubledNumbers = numbers.map(
      (num: number) => num * 2
    );
    console.log(doubledNumbers);

    // 8. FILTER METHOD
    const evenNumbers = numbers.filter(
      (num: number) => num % 2 === 0
    );
    console.log(evenNumbers);

    // 9. REAL PROJECT EXAMPLE
    const employeeSkills: string[] = [
      "JavaScript",
      "TypeScript",
      "Angular",
      "React"
    ];
    console.log(employeeSkills);

  }
}