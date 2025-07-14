import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwipeImageGalleryComponent } from '../shared/components/swipe-image-gallery/swipe-image-gallery.component';
import { PresentationComponent } from "../shared/components/presentation/presentation.component";

@Component({
  selector: 'app-template',
  imports: [
    CommonModule,
    SwipeImageGalleryComponent,
    PresentationComponent
],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass'
})
export class TemplateComponent {
  
}
