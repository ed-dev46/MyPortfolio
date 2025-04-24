import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojectsPageComponent } from './myprojects-page.component';

describe('MyprojectsPageComponent', () => {
  let component: MyprojectsPageComponent;
  let fixture: ComponentFixture<MyprojectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyprojectsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprojectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
