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

  public showItems: boolean = false;
  public showMessage: boolean = false;

  public readonly myName: string = 'Raphael'

  constructor(
    private todoListService: TodoListService,
    private router: Router) { }

  ngOnInit(): void {
    this.onGetItems()
  }

  onGetItems(): void {
    this.showMessage = true;

    this.todoListService
      .getItemsAsync()
      .subscribe(response => {
        this.myArray = response
        this.showMessage = false;
        this.showItems = true;
      })
  }

  onCardClick(item: TodoItem) {
    this.todoListService
      .deleteItemAsync(item)
      .subscribe(() => this.onGetItems())
  }

  onCreateNewTodo(): void {
    this.router.navigateByUrl('/my-form')
  }

  onSeeDirectives(): void {
    this.router.navigateByUrl('/directives-examples')
  }
}
