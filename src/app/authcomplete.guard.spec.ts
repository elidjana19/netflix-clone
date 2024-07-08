import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';





import { authcompleteGuard } from './authcomplete.guard';

describe('authcompleteGuard', () => {
  let guard: authcompleteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(authcompleteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});