import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-browser',
  imports: [],
  templateUrl: './dom-browser.component.html',
  styleUrl: './dom-browser.component.css'
})
export class DomBrowserComponent implements OnInit {

  message: string = "Hello Angular";

  ngOnInit(): void {

    console.log("DOM & BROWSER BASICS");

    // 1. WINDOW OBJECT
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    // 2. LOCATION OBJECT
    console.log(location.href);
    console.log(location.hostname);

    // 3. ARRAY OF DATA
    const users: string[] = [
      "Akhil",
      "Rahul",
      "John"
    ];
    console.log(users);
  }

  // 4. EVENT HANDLING
  // <button (click)="clickMe('Good Morning')">Click Me</button>
  clickMe(days: string): void {
    alert("Hey " + days);
  }

}