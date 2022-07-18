import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logs: String[] = [];

  constructor() {}

  add(message: string) {
    this.logs.push(message);
  }

  clear() {
    this.logs = [];
    return [];
  }
}
