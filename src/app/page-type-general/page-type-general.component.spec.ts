import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTypeGeneralComponent } from './page-type-general.component';

describe('PageTypeGeneralComponent', () => {
  let component: PageTypeGeneralComponent;
  let fixture: ComponentFixture<PageTypeGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTypeGeneralComponent]
    });
    fixture = TestBed.createComponent(PageTypeGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
