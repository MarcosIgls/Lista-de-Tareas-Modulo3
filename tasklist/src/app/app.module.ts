import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component'
import { BotonComponent } from '../app/components/boton/boton.component'
import { TasksComponent } from '../app/components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TasksComponent,
    TasksItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
