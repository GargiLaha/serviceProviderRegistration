import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Observable } from 'rxjs/observable';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule, WavesModule, ButtonsModule, CardsFreeModule, CheckboxModule } from 'angular-bootstrap-md';
import { RecentIdeasComponent } from './recent-ideas/recent-ideas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';


import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
// import { StepperComponent } from './stepper/stepper.component';

import { ServiceProviderRegistrationComponent } from './service-provider-registration/service-provider-registration.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatOptionModule, MatSelectModule, MatCheckboxClickAction, MAT_CHECKBOX_CLICK_ACTION, MatCheckboxModule } from '@angular/material'
import { InputsModule, IconsModule } from 'angular-bootstrap-md';

import { CustomMaterialModule } from './core/material.module';
import { DropdownModule } from 'angular-bootstrap-md';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostIdeaComponent } from './post-idea/post-idea.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { ServiceProviderDashboardComponent } from './service-provider-dashboard/service-provider-dashboard.component';
import { ServiceProviderProfileComponent } from './service-provider-profile/service-provider-profile.component';
import { InnovatorProfileComponent } from './innovator-profile/innovator-profile.component';
import { InnovatorDashboardComponent } from './innovator-dashboard/innovator-dashboard.component';
import { PostIdeaServiceService } from './post-idea-service.service';
import { FooterComponent } from './footer/footer.component';
import { IntelligentServiceComponent } from './intelligent-service/intelligent-service.component';
import { InnovatorRegistrartionComponent } from './innovator-registrartion/innovator-registrartion.component';
import { AllIdeasComponent } from './all-ideas/all-ideas.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { SearchComponent } from './search/search.component';
import { ApplySuccessComponent } from './apply-success/apply-success.component';



// import {MatCheckboxClickAction, MAT_CHECKBOX_CLICK_ACTION,MatCheckboxModule} from '@angular/material'





// import { MatAutocomplete } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecentIdeasComponent,
    ModalSuccessComponent,
    AboutComponent,
    HomeComponent,
    ServiceProviderRegistrationComponent,
    PostIdeaComponent,


    UserLoginComponent,
    ServiceProviderDashboardComponent,
    ServiceProviderProfileComponent,
    InnovatorProfileComponent,
    InnovatorDashboardComponent,
    FooterComponent,
    IntelligentServiceComponent,
    InnovatorRegistrartionComponent,
    ServiceProviderRegistrationComponent,
    AllIdeasComponent,
    IdeaDetailComponent, SearchComponent, ApplySuccessComponent





  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule, WavesModule, ButtonsModule, CardsFreeModule, CheckboxModule, InputsModule, IconsModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,

    MatButtonToggleModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatStepperModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatTabsModule



  ],
  providers: [PostIdeaServiceService, { provide: MatDialogRef, useValue: {} }, { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
