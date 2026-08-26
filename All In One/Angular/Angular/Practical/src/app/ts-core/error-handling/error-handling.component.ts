import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-handling',
  imports: [],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.css'
})
export class ErrorHandlingComponent implements OnInit {

  ngOnInit(): void {


    console.log(name);

    console.log("TYPESCRIPT ERROR HANDLING");

    // 1. try...catch...finally
    try {
      throw new Error("Something went wrong");
    } catch (error) {
      console.log("Error:", error);
    } finally {
      console.log("Done");
    }

    // 2. REAL PROJECT EXAMPLE
    try {
      const result = 10 / 0;
      console.log(result);
    } catch (error) {
      console.log("Calculation Error");
    }

  }
}