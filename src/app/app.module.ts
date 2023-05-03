import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderModule } from '@builder.io/angular'; // <-- import here
import { LandingPageComponent } from './landing-page/landing-page.component'; // <-- import here
import { RouterModule } from '@angular/router';
import { CbComponentComponent } from './custom-builder-components/cb-component/cb-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CbComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuilderModule,
    BuilderModule.forRoot('9dca6903c7b44c8b9f060c16b28d7d20'), // <-- import here and add API Key
    RouterModule.forRoot([
      {
        path: '**',
        component: LandingPageComponent, // <-- add LandingPageComponent here
      },
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
