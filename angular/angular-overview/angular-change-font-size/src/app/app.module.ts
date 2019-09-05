import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FonntSizeEditorComponent } from './component/fonnt-size-editor/fonnt-size-editor.component';
import { HelloComponent } from './component/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    FonntSizeEditorComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
