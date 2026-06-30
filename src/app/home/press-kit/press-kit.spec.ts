import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressKit } from './press-kit';

describe('PressKit', () => {
  let component: PressKit;
  let fixture: ComponentFixture<PressKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressKit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressKit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
