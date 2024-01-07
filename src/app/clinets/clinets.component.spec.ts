import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinetsComponent } from './clinets.component';

describe('ClinetsComponent', () => {
  let component: ClinetsComponent;
  let fixture: ComponentFixture<ClinetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinetsComponent]
    });
    fixture = TestBed.createComponent(ClinetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
