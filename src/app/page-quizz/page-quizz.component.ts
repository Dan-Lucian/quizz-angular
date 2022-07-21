import { Component, OnInit } from '@angular/core';

import { Question } from '../interfaces/question';
import { Answer } from '../interfaces/answer';
import { QuestionService } from '../question.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-quizz',
  templateUrl: './page-quizz.component.html',
  styleUrls: ['./page-quizz.component.scss'],
})
export class PageQuizzComponent implements OnInit {
  public maxQuestions = 5;
  public questions: Question[] = [];
  public indexQuestionCurrent: number = 0;
  public answers: Answer[] = [];

  private _subscriptions?: Array<Subscription>;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  ngOnDestroy(): void {
    this._subscriptions?.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  getQuestions(): void {
    this._subscriptions?.push(
      this.questionService
        .get()
        .subscribe((questions) => (this.questions = questions))
    );
  }

  onClick(isCorrect: boolean, answer: string): void {
    this.answers.push({
      indexQuestion: this.indexQuestionCurrent,
      isCorrect,
      answer,
    });

    if (this.indexQuestionCurrent >= this.maxQuestions) return;

    this._incrementIndexQuestion();
    console.log(`answers: `, this.answers);
  }

  private _incrementIndexQuestion(): void {
    this.indexQuestionCurrent += 1;
  }

  getResults(): number {
    const amountAnswersCorrect = this.answers.reduce(
      (acc, answer) => (answer.isCorrect ? acc + 1 : acc),
      0
    );

    return (amountAnswersCorrect / this.maxQuestions) * 100;
  }
}
