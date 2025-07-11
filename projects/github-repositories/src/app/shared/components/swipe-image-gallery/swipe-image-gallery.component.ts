import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';
import { Observable, of } from 'rxjs';
import { PillowIndicatorComponent } from '../pillow-indicator/pillow-indicator.component';
import { LineIndicatorComponent } from '../line-indicator/line-indicator.component';

/**
 * This component is used to display a swipe image gallery
 * 
 * @example
 * <swipe-image-gallery></swipe-image-gallery>
 */
@Component({
  selector: 'swipe-image-gallery',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent,
    LineIndicatorComponent,
    PillowIndicatorComponent
  ],
  templateUrl: './swipe-image-gallery.component.html',
  styleUrl: './swipe-image-gallery.component.sass'
})
export class SwipeImageGalleryComponent implements AfterViewInit {
  /**
   * This object is used to store the gallery element in the view
   */
  @ViewChild('gallery') gallery!: any
  /**
   * This number is used to store the gap between the images
   */
  gap: number = 8

  /**
   * This array is used to store the images
   */
  images: any = [
    // { id: 0, src: '/assets/images/IMG001.jpg', title: 'Image 1', subtitle: 'Subtitle of the image', description: 'This is the first image', date: new Date() },
    { id: 0, src: '/IMG001.jpg', title: 'Image 1', subtitle: 'Subtitle of the image', description: 'This is the first image', date: new Date() },
    { id: 1, src: '/IMG002.jpg', title: 'Image 2', subtitle: 'Subtitle of the image', description: 'This is the first image', date: new Date() },
    { id: 0, src: '/IMG003.jpg', title: 'Image 1', subtitle: 'Subtitle of the image', description: 'This is the first image', date: new Date() },
    { id: 1, src: '/IMG004.jpg', title: 'Image 2', subtitle: 'Subtitle of the image', description: 'This is the first image', date: new Date() }
  ]
  /**
   * This boolean is used to store the show state of the image
   * @default false
   */
  show: boolean = true
  presentation: 'contain' | 'cover' = 'cover'

  /**
   * This method is used to handle the after view init lifecycle hook
   * The event listener is added to the gallery element to handle the scroll event and calculate the indicator
   */
  ngAfterViewInit(): void {
    this.gallery.nativeElement.addEventListener('scroll', (event: any) => {})
  }

  /**
   * This methode is used to handle the presentation of the image
   * @param event 
   */
  maximize(event: any) {
    event.stopPropagation()
    this.presentation = this.presentation === 'contain' ? 'cover' : 'contain'
  }

  /**
   * This Methode is used to handle the indicator of the gallery
   * @returns 
   */
  calcIndicator(): Observable<number> {
    switch (true) {
      case !this.gallery:
      case this.gallery.nativeElement.scrollLeft === 0:
        return of(0)
        break
      case this.gallery && this.gallery.nativeElement.scrollLeft > 0:
        return of(this.gallery.nativeElement.scrollLeft / (this.gallery.nativeElement.offsetWidth + this.gap))
        break
      default:
        return of(0)
    }
  }
  /**
   * This Methode is used to handle the horizontal scroll of the gallery by the indicator
   * @returns 
   */
  changeIndicator(event: any) {
    this.gallery.nativeElement.scrollTo({ left: event * (this.gallery.nativeElement.offsetWidth + this.gap), behavior: 'smooth' })
  }
}
