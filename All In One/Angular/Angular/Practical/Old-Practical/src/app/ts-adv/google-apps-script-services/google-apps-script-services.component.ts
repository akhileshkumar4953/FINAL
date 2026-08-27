import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-apps-script-services',
  imports: [],
  templateUrl: './google-apps-script-services.component.html',
  styleUrl: './google-apps-script-services.component.css'
})
export class GoogleAppsScriptServicesComponent implements OnInit {

  ngOnInit(): void {

    console.log('GOOGLE APPS SCRIPT SERVICES');

    // Sample Employee Data
    const employeeData = {
      employeeId: 101,
      employeeName: 'Akhil',
      department: 'IT',
      salary: 50000
    };

    console.log(employeeData);

    console.log('SpreadsheetApp → Google Sheets');
    console.log('GmailApp → Send Emails');
    console.log('DriveApp → Google Drive');
    console.log('Logger → Print Output');

  }
}