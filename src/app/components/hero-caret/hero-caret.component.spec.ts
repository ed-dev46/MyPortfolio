import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCaretComponent } from './hero-caret.component';

describe('HeroCaretComponent', () => {
  let component: HeroCaretComponent;
  let fixture: ComponentFixture<HeroCaretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCaretComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCaretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
