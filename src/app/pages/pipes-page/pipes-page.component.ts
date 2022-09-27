import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
  styleUrls: ['./pipes-page.component.scss']
})
export class PipesPageComponent implements OnInit {

  public today: Date = new Date()
  public lowercaseString: string = 'lowercasestring'
  public uppercaseString: string = 'UPPERCASESTRING'
  public titlecaseString: string = 'two words'
  public myPipeString: string = 'O valor que vai ser alterado'
  public myPipeNumber: number = 10
  public moneyValue: number = 30.4

  private value: string = 'text';
  public stream: BehaviorSubject<string> =
    new BehaviorSubject(this.value);

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    // this.value++

    // this.stream.next(this.value)

    this.value = `${this.value} text`

    this.stream.next(this.value)
  }
}
