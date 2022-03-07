import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import {LaboratoryComponent} from "./laboratory/laboratory.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {SamplesComponent} from './samples/samples.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeamatologyComponent } from './heamatology/heamatology.component';
import {EnterSampleComponent} from './enter-sample/enter-sample.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { GlucomtryComponent } from './glucomtry/glucomtry.component';
import {HttpClientModule} from '@angular/common/http';
import { SampleUserComponent } from './sample-user/sample-user.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { RouteguardGuard } from './guard/routeguard.guard';




@NgModule({
  declarations: [   
    AppComponent,
    // LoginComponent
    LaboratoryComponent,
    LoginComponent,
    RegisterComponent,
    SamplesComponent,
    AdminLoginComponent,
    HeamatologyComponent,
    EnterSampleComponent,
    ThyroidComponent,
    GlucomtryComponent,
    SampleUserComponent,
    EditDetailsComponent,
    FilterPipe,
    ViewdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [RouteguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
