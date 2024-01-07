import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazymoduleComponent } from './lazymodule.component';

describe('LazymoduleComponent', () => {
  let component: LazymoduleComponent;
  let fixture: ComponentFixture<LazymoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazymoduleComponent]
    });
    fixture = TestBed.createComponent(LazymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
