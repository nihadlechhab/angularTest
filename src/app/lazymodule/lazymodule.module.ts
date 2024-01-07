import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazymoduleRoutingModule } from './lazymodule-routing.module';
import { LazymoduleComponent } from './lazymodule.component';


@NgModule({
  declarations: [
    LazymoduleComponent
  ],
  imports: [
    CommonModule,
    LazymoduleRoutingModule
  ]
})
export class LazymoduleModule { }
