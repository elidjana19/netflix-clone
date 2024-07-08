import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaisPageComponent } from './detais-page.component';

describe('DetaisPageComponent', () => {
  let component: DetaisPageComponent;
  let fixture: ComponentFixture<DetaisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaisPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
