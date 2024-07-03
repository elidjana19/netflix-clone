import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigAdComponent } from './big-ad.component';

describe('BigAdComponent', () => {
  let component: BigAdComponent;
  let fixture: ComponentFixture<BigAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
