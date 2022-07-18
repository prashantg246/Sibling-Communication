import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  logToServer(logData: any) {
    console.log('Data logged to server', logData);
  }
}
