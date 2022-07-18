import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuestionsComponent } from './page-questions.component';

describe('PageQuestionsComponent', () => {
  let component: PageQuestionsComponent;
  let fixture: ComponentFixture<PageQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
