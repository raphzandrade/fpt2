import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  constructor(private httpClient: HttpClient) { }


  public getItemsAsync(): Observable<TodoItem[]> {
    // endereço de onde buscar a informação
    const url = `${environment.rootUrl}/items`;

    // utilizando o http client para criar
    // a instrução de como buscar a informação
    // devolvendo essa instrução para quem 
    // estiver consumindo o service.
    return this.httpClient.get<TodoItem[]>(url)
  }

  public deleteItemAsync(item: TodoItem): Observable<{}> {
    const url = `${environment.rootUrl}/items/${item.id}`

    return this.httpClient.delete(url)
  }

  public postItemAsync(item: TodoItem): Observable<TodoItem> {
    const url = `${environment.rootUrl}/items`

    return this.httpClient.post<TodoItem>(url, item)
  }
}
