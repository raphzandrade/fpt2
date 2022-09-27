import { TestBed } from '@angular/core/testing';

import { TodoListPushService } from './todo-list-push.service';

describe('TodoListPushService', () => {
  let service: TodoListPushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListPushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
