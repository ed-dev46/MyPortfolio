import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsTitleComponent } from './brackets-title.component';

describe('BracketsTitleComponent', () => {
  let component: BracketsTitleComponent;
  let fixture: ComponentFixture<BracketsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracketsTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BracketsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
