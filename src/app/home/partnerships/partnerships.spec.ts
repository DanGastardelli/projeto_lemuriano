import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partnerships } from './partnerships';

describe('Partnerships', () => {
  let component: Partnerships;
  let fixture: ComponentFixture<Partnerships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partnerships]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partnerships);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
