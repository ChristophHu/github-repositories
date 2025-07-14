import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillowIndicatorComponent } from './pillow-indicator.component';

describe('PillowIndicatorComponent', () => {
  let component: PillowIndicatorComponent;
  let fixture: ComponentFixture<PillowIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PillowIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PillowIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
