import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoggingService, ServicesModule } from './shared/services/';


export class AppErrorHandler extends ErrorHandler {

  constructor(private _logger: LoggingService) {
    super();
  }

  handleError(error) {
    this._logger.report('An unexpected error occurred.', error);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    CommonModule,
    CommonModule,
    routing,
    ServicesModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: ErrorHandler, useClass: AppErrorHandler, deps: [LoggingService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


