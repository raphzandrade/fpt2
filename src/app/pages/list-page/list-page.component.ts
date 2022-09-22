import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private todoListService: TodoListService,
    private router: Router) { }

  ngOnInit(): void {
    this.todoListService
      .getItemsAsync()
      .subscribe(response => {
        this.myArray = response
      })
  }

  onCardClick(item: TodoItem) {
    this.todoListService
      .deleteItemAsync(item)
      .pipe(
        switchMap(() => this.todoListService.getItemsAsync())
      )
      .subscribe(response => this.myArray = response)
  }

  onCreateNewTodo(): void {
    this.router.navigateByUrl('/my-form')
  }

}
