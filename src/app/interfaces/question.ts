export interface Question {
  id: number;
  body: string;
  answers: Array<string>;
  correctAnswer: string;
}
