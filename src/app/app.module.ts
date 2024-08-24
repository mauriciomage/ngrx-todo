import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './todos/state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TodosModule,
    StoreModule.forRoot({
      todoState: todosReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
