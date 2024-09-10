import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorTempComponent } from './conversor-temp.component';

describe('ConversorTempComponent', () => {
  let component: ConversorTempComponent;
  let fixture: ComponentFixture<ConversorTempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversorTempComponent]
    });
    fixture = TestBed.createComponent(ConversorTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
