import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDecorationComponent } from './title-decoration.component';

describe('TitleDecorationComponent', () => {
  let component: TitleDecorationComponent;
  let fixture: ComponentFixture<TitleDecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleDecorationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
