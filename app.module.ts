import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdListComponent } from './prod-list/prod-list.component';
@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([{path: 'home',component: HomeComponent},
    {path: 'prod-list',component: ProdListComponent}
  ])],
    declarations: [
      AppComponent,
      HomeComponent,
      ProdListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
