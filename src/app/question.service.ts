import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

import { Question } from './interfaces/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private urlApi = 'https://62d522585112e98e48593d85.mockapi.io/questions-2';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.urlApi).pipe(
      tap((questions) =>
        this.log(`fetched questions: ${JSON.stringify(questions, null, 2)}`)
      ),
      catchError(this.handleError<Question[]>('get', []))
    );
  }

  add(question: Question): Observable<Question> {
    return this.httpClient
      .post<Question>(this.urlApi, question, this.httpOptions)
      .pipe(
        tap((question: Question) =>
          this.log(`added question: ${question.body}`)
        ),
        catchError(this.handleError<Question>('add'))
      );
  }

  /** Log a QuestionService message with the MessageService */
  private log(message: string) {
    console.log(`QuestionService: ${message}`);
    // this.messageService.add(`QuestionService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
