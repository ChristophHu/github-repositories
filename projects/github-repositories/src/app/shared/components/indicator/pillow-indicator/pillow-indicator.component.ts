import { Component, EventEmitter, Input, Output } from '@angular/core'
import { range } from '../../../utils'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'pillow-indicator',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pillow-indicator.component.html',
  styleUrl: './pillow-indicator.component.sass'
})
export class PillowIndicatorComponent {
  @Input() length: number = 0
  @Input() selected: number = 0
  @Output() selectedChange: EventEmitter<number> = new EventEmitter<number>()
  
  getRange(): number[] {
    return range(0, this.length - 1)
  }
  setActive(index: number) {
    this.selectedChange.emit(index)
    this.selected = index
  }
}
