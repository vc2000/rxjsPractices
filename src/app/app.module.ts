import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TakeComponent } from './components/take/take.component';
import { ManystreamsComponent } from './components/manystreams/manystreams.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    TakeComponent,
    ManystreamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
