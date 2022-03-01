import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SaskazComponent } from './saskaz/saskaz.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CountprinterComponent } from './countprinter/countprinter.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SaskazComponent,
    CountprinterComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HttpClient],
})
export class AppModule {}
