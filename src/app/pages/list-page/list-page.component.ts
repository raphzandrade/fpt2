import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { TodoItem } from 'src/app/interfaces';
import { TodoListService } from 'src/app/services';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public myArray: TodoItem[] = []

  public readonly myName: string = 'Raphael'

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    // this.myArray = this.todoListService.getItems()

    this.todoListService
      .getItemsAsync()
      .subscribe(response => {
        this.myArray = response
      })
  }

  addToMyArray() {
    // this.myArray.push(5);
  }

  onButtonClick(event: unknown) {
    console.log('evento do button', event)

    // if(event instanceof MouseEvent) {
    //   event.cancelable
    // }

    // if(event instanceof DragEvent) {
    //   event.cancelable
    // }
  }

  onCardClick(item: TodoItem) {
    // this.todoListService.deleteItem(item.id)

    this.todoListService
      .deleteItemAsync(item)
      .pipe(
        switchMap(() => this.todoListService.getItemsAsync())
      )
      .subscribe(response => this.myArray = response)
  }

  // soma(value1: number, value2: number): void {
  //   const numb: number = 1;
  //   const strin: string = 'string';
  //   const bool: boolean = true;
  // }

}
