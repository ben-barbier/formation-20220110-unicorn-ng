import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { MaterialModule } from './material.module';
import { AdminComponent } from './pages/admin/admin.component';
import { UnicornComponent } from './pages/unicorn/unicorn.component';
import { UnicornCardComponent } from './pages/unicorns-list/unicorn-card/unicorn-card.component';
import { UnicornsListComponent } from './pages/unicorns-list/unicorns-list.component';

@NgModule({
  declarations: [AppComponent, NavComponent, UnicornsListComponent, UnicornCardComponent, AdminComponent, UnicornComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
