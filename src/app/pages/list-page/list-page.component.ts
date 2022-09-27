import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { TodoItem } from 'src/app/interfaces';
import { TodoListService } from 'src/app/services';
import { TodoListPushService } from 'src/app/services/todo-list-push/todo-list-push.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public myArray: TodoItem[] = []

  public showItems: boolean = false;
  public showMessage: boolean = false;

  public readonly myName: string = 'Raphael'

  public readonly items$: Observable<TodoItem[]> = this.todoListPushService.items;
  public readonly itemCount$: Observable<number>
    = this.todoListPushService.items.pipe(map(value => value.length))

  constructor(
    private todoListService: TodoListService,
    private todoListPushService: TodoListPushService,
    private router: Router) { }

  ngOnInit(): void {
    this.onGetItems()
  }

  onGetItems(): void {
    // this.showMessage = true;

    // this.todoListService
    //   .getItemsAsync()
    //   .subscribe(response => {
    //     this.myArray = response
    //     this.showMessage = false;
    //     this.showItems = true;
    //   })

    this.todoListPushService.getItems()
  }

  onCardClick(item: TodoItem) {
    // this.todoListService
    //   .deleteItemAsync(item)
    //   .subscribe(() => this.onGetItems())

    this.todoListPushService.deleteItem(item)
  }

  onCreateNewTodo(): void {
    this.router.navigateByUrl('/my-form')
  }

  onSeeDirectives(): void {
    this.router.navigateByUrl('/directives-examples')
  }

  onSeePipes(): void {
    this.router.navigateByUrl('/pipes-examples')
  }
}
