import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIndexComponent } from './page-index/page-index.component';
import { PageQuestionsComponent } from './page-questions/page-questions.component';
import { PageQuizzComponent } from './page-quizz/page-quizz.component';

const routes: Routes = [
  {
    path: '',
    component: PageIndexComponent,
  },
  {
    path: 'questions',
    component: PageQuestionsComponent,
  },
  {
    path: 'quizz',
    component: PageQuizzComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
