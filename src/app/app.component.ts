import { Component } from '@angular/core';
import { AppService } from './app.service';
import { LogsInterface } from './app.model';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  logs: LogsInterface[] = [];

  colDefs: ColDef[] = [
    { field: "Id" },
    { field: "Message" },
    { field: "MessageTemplate" },
    { field: "Level" },
    { field: "TimeStamp" },
    { field: "Exception" },
    { field: "Properties" },
    { field: "LogEvent" }
  ];

  constructor(_appService: AppService) {
    _appService.getLogs().subscribe(result => {
      this.logs = result;
    })
  }

}
