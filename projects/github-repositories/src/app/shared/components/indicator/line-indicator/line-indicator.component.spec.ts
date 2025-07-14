import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineIndicatorComponent } from './line-indicator.component';

describe('TabIndicatorComponent', () => {
  let component: LineIndicatorComponent;
  let fixture: ComponentFixture<LineIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
