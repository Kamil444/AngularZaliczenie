import { TestBed } from '@angular/core/testing';

import { GameoverService } from './gameover.service';

describe('GameoverService', () => {
  let service: GameoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
