import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss']
})
export class DirectivesPageComponent implements OnInit {

  public switchCondition: number = 1;
  public isBlue: boolean = true;
  public isRed: boolean = false;
  public borderRadius: string = '99px';
  public showSpinner: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddCondition(): void {
    this.switchCondition++
  }

  onToggleBlue(): void {
    this.isBlue = !this.isBlue
  }

  onToggleRed(): void {
    this.isRed = !this.isRed
  }

  onToggleBorderRadius(): void {
    if (this.borderRadius === '99px') {
      this.borderRadius = '0px'

      return;
    }

    this.borderRadius = '99px'
  }
}
