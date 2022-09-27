import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { TodoItem } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoListPushService {

  private readonly rootUrl: string = 'http://localhost:3000'

  private itemsStore: TodoItem[] = [];

  public readonly items: BehaviorSubject<TodoItem[]>
    = new BehaviorSubject(this.itemsStore)

  private readonly closeSubscription: Subject<void>
    = new Subject()

  constructor(private httpClient: HttpClient, private router: Router) { }

  getItems(): void {
    this.closeSubscription.next()

    const url = `${this.rootUrl}/items`;

    const requestObservable = this.httpClient.get<TodoItem[]>(url)

    requestObservable
      .pipe(
        takeUntil(this.closeSubscription)
      )
      .subscribe(response => {
        this.itemsStore = response;

        this.items.next(this.itemsStore)
      })
  }

  deleteItem(item: TodoItem): void {
    this.closeSubscription.next()

    const url = `${this.rootUrl}/items/${item.id}`

    this.httpClient.delete(url)
      .pipe(takeUntil(this.closeSubscription))
      .subscribe(() => {
        const index = this.itemsStore.findIndex((element) => element.id = item.id);

        this.itemsStore.splice(index, 1);

        this.items.next(this.itemsStore)
      })

  }

  postItem(item: TodoItem, redirectAfterSuccess?: boolean): void {
    this.closeSubscription.next()

    const url = `${this.rootUrl}/items`

    this.httpClient
      .post<TodoItem>(url, item)
      .pipe(takeUntil(this.closeSubscription))
      .subscribe(response => {
        this.itemsStore.push(response)

        this.items.next(this.itemsStore)

        if (redirectAfterSuccess) {
          this.router.navigateByUrl('/')
        }
      })
  }
}
