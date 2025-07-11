import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeImageGalleryComponent } from './swipe-image-gallery.component';

describe('SwipeImageGalleryComponent', () => {
  let component: SwipeImageGalleryComponent;
  let fixture: ComponentFixture<SwipeImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeImageGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwipeImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
