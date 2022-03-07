import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SamplesComponent} from './samples/samples.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {EnterSampleComponent} from './enter-sample/enter-sample.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {HeamatologyComponent} from './heamatology/heamatology.component';
import {LaboratoryComponent} from './laboratory/laboratory.component';
import {ThyroidComponent} from './thyroid/thyroid.component';
import {GlucomtryComponent} from './glucomtry/glucomtry.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import {ViewdetailsComponent} from './viewdetails/viewdetails.component';
import { RouteguardGuard } from './guard/routeguard.guard';


const routes: Routes = [
  {path:'samples',component:SamplesComponent,canActivate:[RouteguardGuard]},
  {path:'register',component:RegisterComponent,canActivate:[RouteguardGuard]},
  {path:'login',component:LoginComponent,canActivate:[RouteguardGuard]},
  {path:'enter-sample',component:EnterSampleComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'heamatology',component:HeamatologyComponent},
  {path:'',component:LaboratoryComponent},
  {path:'thyroid',component:ThyroidComponent},
  {path:'glucomtry',component:GlucomtryComponent},
  // {path:'edit-details',component:EditDetailsComponent},
  {path:"getUser/:_id",component:EditDetailsComponent},
  {path:"viewdetails",component:ViewdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
