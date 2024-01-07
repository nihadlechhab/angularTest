import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExamleModule } from './material.module';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { HightlightDirective } from './hightlight.directive';
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ClinetsComponent } from './clinets/clinets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { TestFormComponent } from './test-form/test-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { CommonInterceptor } from './common.interceptor';
import { UsersComponent } from './users/users.component';


 


@NgModule({
  declarations: [
    AppComponent,
    HomeDefaultComponent,
    ContentProjectionComponent,
    HightlightDirective,
    LoansComponent,
    AddLoansComponent,
    ClinetsComponent,
    PageNotFoundComponent,
    AdminComponent,
    AdminEditComponent,
    AdminDeleteComponent,
    TestFormComponent,
    ReactiveFormComponent,
    UsersComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExamleModule,
    FormsModule,
    ReactiveFormsModule,

   
 
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide:HTTP_INTERCEPTORS,useClass:CommonInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

