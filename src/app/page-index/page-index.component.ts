import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.scss'],
})
export class PageIndexComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  startQuizz() {
    this.router.navigate(['/quizz']);
  }
}
