import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageQuestionsComponent } from './page-questions/page-questions.component';
import { PageQuizzComponent } from './page-quizz/page-quizz.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageQuestionsComponent,
    PageQuizzComponent,
    PageIndexComponent,
    LogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
