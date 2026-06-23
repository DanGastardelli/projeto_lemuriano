import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenNow } from './listen-now';

describe('ListenNow', () => {
  let component: ListenNow;
  let fixture: ComponentFixture<ListenNow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListenNow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenNow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
