import { Component, OnInit } from '@angular/core';
import { name, greet } from './app';
import { Employee } from './employee';
@Component({
  selector: 'app-modules',
  imports: [],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent implements OnInit {

  ngOnInit(): void {
    console.log('Modules Topic Loaded');
    console.log(name);
    greet();


    const emp = new Employee(
      101,
      "Akhil"
    );

    console.log(emp);

  }
}
