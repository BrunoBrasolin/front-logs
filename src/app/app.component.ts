import { Component } from '@angular/core';
import { AppService } from './app.service';
import { LogsInterface } from './app.model';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public rowData: LogsInterface[] = [];

  public columnDefs: ColDef[] = [
    { field: 'Id', headerName: 'ID' },
    { field: 'Message', headerName: 'Message' },
    { field: 'MessageTemplate', headerName: 'Message Template' },
    { field: 'Level', headerName: 'Level' },
    { field: 'TimeStamp', headerName: 'Time Stamp' },
    { field: 'Exception', headerName: 'Exception' },
    { field: 'Properties', headerName: 'Properties' },
    { field: 'LogEvent', headerName: 'Log Event' }
  ];

  constructor(_appService: AppService) {
    _appService.getLogs().subscribe((result: LogsInterface[]) => {
      this.rowData = [...result];
    })
  }

}
