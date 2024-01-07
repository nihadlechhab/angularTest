import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazymoduleComponent } from './lazymodule.component';

const routes: Routes = [{ path: '', component: LazymoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazymoduleRoutingModule { }
