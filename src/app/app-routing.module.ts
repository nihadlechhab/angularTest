import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanMatch } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ClinetsComponent } from './clinets/clinets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { adminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { adminAccesGuard } from './admin-acces.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { deactiveguardGuard } from './deactiveguard.guard';
import { TestFormComponent } from './test-form/test-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
// put 
{
  path:'admin-edit', component:AdminEditComponent
},
{
  path:'admin-delete/:id', component:AdminDeleteComponent
},
{
  path:'users', component:UsersComponent
},





  // { path:'loans',
   
  //   children: [
  //     { path:'add',
  //     component :AddLoansComponent,
      
  //   }
    { path:'loans',
   
      component :LoansComponent,
      canDeactivate:[deactiveguardGuard]
      
    },
    {
      path: 'admin',
      component:AdminComponent,
    

      // children : [
      //   {
      //     path:'admin-edit',
      //     component:AdminEditComponent,
      //     canActivateChild:[adminAccesGuard]

      //   },
      //   {
      //     path:'admin-delete',
      //     component:AdminDeleteComponent,
      //     canActivateChild:[adminAccesGuard]
      //   },
      // ]

      }, 
     

  { 
    path: 'lazymodule', 
    loadChildren: () =>
     import('./lazymodule/lazymodule.module').then(m => m.LazymoduleModule),
  
    
    },
   {
    path:'form',
    component:TestFormComponent
   },

   {
    path:'reactive',
    component:ReactiveFormComponent,
   },

    {
      path:'**',
      component:PageNotFoundComponent
    }
    ]
  


   
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
