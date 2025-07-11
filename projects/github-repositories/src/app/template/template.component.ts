import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwipeImageGalleryComponent } from '../shared/components/swipe-image-gallery/swipe-image-gallery.component';

@Component({
  selector: 'app-template',
  imports: [
    CommonModule,
    SwipeImageGalleryComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass'
})
export class TemplateComponent {
  
}
