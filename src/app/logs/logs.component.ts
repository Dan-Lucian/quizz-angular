import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {}
}
