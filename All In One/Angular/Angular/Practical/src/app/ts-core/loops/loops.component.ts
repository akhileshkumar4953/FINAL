import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.css'
})
export class LoopsComponent implements OnInit {

  ngOnInit(): void {


    const arr: string[] = ["A", "B", "C"];

    // // 1. for LOOP
    for (let i: number = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }




    // // 2. for...of LOOP
    for (const item of arr) {
      console.log(item);
    }

    // // 3. while LOOP
    let count: number = 0;
    while (count < 3) {
      console.log(count);
      count++;
    }

    // 4. break & continue
    for (let n: number = 1; n <= 5; n++) {
      if (n === 3) {
        continue;
      }
      if (n === 5) {
        break;
      }
      console.log(n);
    }

  }
}
