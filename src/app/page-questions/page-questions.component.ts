import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Question } from '../interfaces/question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-page-questions',
  templateUrl: './page-questions.component.html',
  styleUrls: ['./page-questions.component.scss'],
})
export class PageQuestionsComponent implements OnInit {
  questions: Question[] = [];
  formQuestion = this.formBuilder.group({
    question: '',
    answerCorrect: '',
    answerWrong1: '',
    answerWrong2: '',
  });

  constructor(
    private questionService: QuestionService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService
      .get()
      .subscribe((questions) => (this.questions = questions));
  }

  onSubmit() {
    const { question, answerCorrect, answerWrong1, answerWrong2 } =
      this.formQuestion.value;

    if (
      !question?.trim() ||
      !answerCorrect?.trim() ||
      !answerWrong1?.trim() ||
      !answerWrong2?.trim()
    )
      return;

    console.log(this.formQuestion.value);

    const json = {
      body: question,
      correctAnswer: answerCorrect,
      answers: [answerWrong1, answerWrong2],
    };

    this.questionService
      .add(json as Question)
      .subscribe((question) => this.questions.push(question));
  }
}
