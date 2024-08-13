import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogsInterface } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpClient: HttpClient) { }

  getLogs(): Observable<LogsInterface[]> {
    return this._httpClient.get<LogsInterface[]>("http://localhost:8080");
  }
}
