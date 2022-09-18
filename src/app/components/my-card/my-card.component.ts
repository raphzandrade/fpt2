import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  @Output() cardClick: EventEmitter<number>

  @Input() value: number = 0

  constructor() {
    this.cardClick = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.cardClick.emit(this.value)
  }
}
