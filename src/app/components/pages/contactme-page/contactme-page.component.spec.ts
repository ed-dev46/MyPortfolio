import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmePageComponent } from './contactme-page.component';

describe('ContactmePageComponent', () => {
  let component: ContactmePageComponent;
  let fixture: ComponentFixture<ContactmePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactmePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
