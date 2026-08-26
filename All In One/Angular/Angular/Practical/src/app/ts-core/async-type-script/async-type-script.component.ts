import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-type-script',
  imports: [],
  templateUrl: './async-type-script.component.html',
  styleUrl: './async-type-script.component.css'
})
export class AsyncTypeScriptComponent implements OnInit {

  ngOnInit(): void {

    // console.log("TYPESCRIPT ASYNC");
    
    setTimeout(() => {
      console.log("Callback");
    }, 5000);

    // 1. ASYNC FUNCTION
    async function getData(): Promise<string> {
      return "Data Loaded";
    }

    // // 2. ASYNC / AWAIT
    async function main(): Promise<void> {

      const result = await getData();

      console.log(result);
    }
    main();

  }
}