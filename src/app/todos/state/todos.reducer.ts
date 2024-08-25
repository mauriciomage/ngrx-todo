import { createReducer, on } from '@ngrx/store';
import { initialTodos, Todo } from '../model';
import { TodosPageActions } from '.';

export const todosStateFeatureKey = 'todosState';

// define the model/structure of the state
export interface TodosState {
  todos: Todo[];
  completed: boolean;
}

const initialState: TodosState = { todos: [], completed: false };

export const todosReducer = createReducer(
  initialState,
  on(TodosPageActions.init, (currentState) => ({
    ...currentState,
    todos: initialTodos,
  })),
  on(TodosPageActions.addTodo, (currentState, action) => ({
    ...currentState,
    todos: [...currentState.todos, action.todo],
  })),
  on(TodosPageActions.removeTodo, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.filter((todo) => todo.id !== action.todo.id),
  })),
  on(TodosPageActions.markAsCompleted, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.map((todo) =>
      todo.id === action.todo.id ? { ...todo, completed: true } : todo
    ),
  })),
  on(TodosPageActions.markAsPending, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.map((todo) =>
      todo.id === action.todo.id ? { ...todo, completed: false } : todo
    ),
  })),
  on(TodosPageActions.clearCompleted, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.filter((todo) => todo.completed === false),
  }))
);
