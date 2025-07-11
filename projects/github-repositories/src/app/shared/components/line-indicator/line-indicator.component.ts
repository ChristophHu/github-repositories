import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { range } from '../../utils'

@Component({
  selector: 'line-indicator',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './line-indicator.component.html',
  styleUrl: './line-indicator.component.sass'
})
export class LineIndicatorComponent {
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
