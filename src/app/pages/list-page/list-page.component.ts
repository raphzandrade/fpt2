import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public myArray = [1, 2, 3, 4]
  public myName = 'Raphael'

  constructor() { }

  ngOnInit(): void {
  }

  addToMyArray() {
    this.myArray.push(5);
  }

  onButtonClick(event: unknown) {
    console.log('evento do button', event)
  }

  onCardClick(value: number) {
    console.log('card clicked', value)
  }

}
