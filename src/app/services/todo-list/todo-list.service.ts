import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private myList: TodoItem[] = [
    {
      id: 1,
      message: 'Lavar louça'
    },
    {
      id: 2,
      message: 'Alimentar os gatos'
    },
    {
      id: 3,
      message: 'Escovar os dentes'
    },
    {
      id: 4,
      message: 'Descer o lixo'
    },
  ]

  private readonly rootUrl: string = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }


  public getItemsAsync(): Observable<TodoItem[]> {
    // endereço de onde buscar a informação
    const url = `${this.rootUrl}/items`;

    // utilizando o http client para criar
    // a instrução de como buscar a informação
    // devolvendo essa instrução para quem 
    // estiver consumindo o service.
    return this.httpClient.get<TodoItem[]>(url)
  }

  public deleteItemAsync(item: TodoItem): Observable<any> {
    const url = `${this.rootUrl}/items/${item.id}`

    return this.httpClient.delete(url)
  }

  public getItems(): TodoItem[] {
    return this.myList
  }

  public deleteItem(id: number): TodoItem[] {
    const index = this.myList.findIndex(el => el.id === id)

    this.myList.splice(index, 1)

    return this.myList
  }
}
