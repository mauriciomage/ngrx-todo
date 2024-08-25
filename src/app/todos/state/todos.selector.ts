import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState, todosStateFeatureKey } from './todos.reducer';
import { Todo } from '../model';

const todosState = createFeatureSelector<TodosState>(todosStateFeatureKey);

export const todos = createSelector(
  todosState,
  (todoState: TodosState) => todoState.todos
);

// todos is used from the previous selector to avoid to reload the whole state again
export const todoHasCompleted = createSelector(todos, (todos) =>
  todos.some((todo: Todo) => todo.completed)
);
