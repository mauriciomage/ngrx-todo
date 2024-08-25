import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { createTodo, initialTodos, Todo } from './model';
import { Store } from '@ngrx/store';
import { TodosPageActions, TodosSelectors } from './state';
import { Observable } from 'rxjs';

@Component({
  selector: 'ako-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]> = this.store.select(TodosSelectors.todos);

  hasCompletedTodos$: Observable<boolean> = this.store.select(
    TodosSelectors.todoHasCompleted
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodosPageActions.init());
  }

  addTodo(description: string): void {
    const newTodo = createTodo(description);
    this.store.dispatch(TodosPageActions.addTodo({ todo: newTodo }));
  }

  removeTodo(todoToRemove: Todo): void {
    this.store.dispatch(TodosPageActions.removeTodo({ todo: todoToRemove }));
  }

  markAsCompleted(todoToMark: Todo): void {
    this.store.dispatch(
      TodosPageActions.markAsCompleted({ todo: todoToMark, completed: true })
    );
  }

  markAsPending(todoToMark: Todo): void {
    this.store.dispatch(
      TodosPageActions.markAsPending({ todo: todoToMark, completed: false })
    );
  }

  clearCompleted(): void {
    this.store.dispatch(TodosPageActions.clearCompleted({ completed: false }));
  }
}
