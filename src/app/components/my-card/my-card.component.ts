import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TodoItem } from 'src/app/interfaces';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
})
export class MyCardComponent implements OnInit {

  @Output() cardClick: EventEmitter<TodoItem>

  @Input() value: TodoItem

  constructor() {
    this.cardClick = new EventEmitter<TodoItem>();
    this.value = { id: 0, message: '' }
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.cardClick.emit(this.value)
  }
}
