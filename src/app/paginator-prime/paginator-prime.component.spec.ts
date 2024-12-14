import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorPrimeComponent } from './paginator-prime.component';

describe('PaginatorPrimeComponent', () => {
  let component: PaginatorPrimeComponent;
  let fixture: ComponentFixture<PaginatorPrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorPrimeComponent]
    });
    fixture = TestBed.createComponent(PaginatorPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
