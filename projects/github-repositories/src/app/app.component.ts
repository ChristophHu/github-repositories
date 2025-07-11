import { Component } from '@angular/core';
import { NgxGithubPagesDemoComponent } from '@christophhu/ngx-github-pages-demo';
import { SwipeImageGalleryComponent } from './shared/components/swipe-image-gallery/swipe-image-gallery.component';

@Component({
  selector: 'app-root',
  imports: [
    NgxGithubPagesDemoComponent,
    SwipeImageGalleryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
}
