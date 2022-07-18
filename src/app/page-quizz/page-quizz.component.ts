import { Component, OnInit } from '@angular/core';

import { Question } from '../interfaces/question';
import { Answer } from '../interfaces/answer';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-page-quizz',
  templateUrl: './page-quizz.component.html',
  styleUrls: ['./page-quizz.component.scss'],
})
export class PageQuizzComponent implements OnInit {
  maxQuestions = 5;
  questions: Question[] = [];
  indexQuestionCurrent: number = 0;
  answers: Answer[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService
      .get()
      .subscribe((questions) => (this.questions = questions));
  }

  onClick(isCorrect: boolean, answer: string): void {
    this.answers.push({
      indexQuestion: this.indexQuestionCurrent,
      isCorrect,
      answer,
    });

    if (this.indexQuestionCurrent >= this.maxQuestions) return;

    this.incrementIndexQuestion();
    console.log(`answers: `, this.answers);
  }

  private incrementIndexQuestion(): void {
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
