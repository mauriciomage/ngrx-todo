import { createAction, props } from '@ngrx/store';
import { Todo } from '../model';

export const init = createAction('[Todos Page] init');

export const addTodo = createAction(
  '[Todos Page] Add Todo',
  props<{ todo: Todo }>()
);

export const removeTodo = createAction(
  '[Todos Page] Remove Todo',
  props<{ todo: Todo }>()
);

export const markAsCompleted = createAction(
  '[Todos Page] Mark as Completed',
  props<{ todo: Todo; completed: boolean }>()
);

export const markAsPending = createAction(
  '[Todos Page] Mark as Pending',
  props<{ todo: Todo; completed: boolean }>()
);

export const clearCompleted = createAction(
  '[Todos Page] Clear Completed',
  props<{ completed: boolean }>()
);
