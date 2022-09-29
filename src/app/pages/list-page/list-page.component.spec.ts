import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoListPushService } from 'src/app/services/todo-list-push/todo-list-push.service';
import { defaultItems, TodoListPushServiceMock } from 'src/app/services/todo-list-push/todo-list-push.service.mock';

import { ListPageComponent } from './list-page.component';

fdescribe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPageComponent],
      providers: [
        // TodoListPushService
        { provide: TodoListPushService, useClass: TodoListPushServiceMock }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display card itens correctly', () => {
    const cardItemElements = fixture.debugElement.queryAll(By.css('.card-item'))

    expect(cardItemElements.length).toBe(defaultItems.length)
  })
});
