import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentIdeasComponent } from './recent-ideas/recent-ideas.component';
import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServiceProviderRegistrationComponent } from './service-provider-registration/service-provider-registration.component';
import { InnovatorRegistrartionComponent } from './innovator-registrartion/innovator-registrartion.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ServiceProviderDashboardComponent } from './service-provider-dashboard/service-provider-dashboard.component';
import { ServiceProviderProfileComponent } from './service-provider-profile/service-provider-profile.component';
import { InnovatorProfileComponent } from './innovator-profile/innovator-profile.component';
import { InnovatorDashboardComponent } from './innovator-dashboard/innovator-dashboard.component';
import { PostIdeaComponent } from './post-idea/post-idea.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IntelligentServiceComponent } from './intelligent-service/intelligent-service.component';
import { AllIdeasComponent } from './all-ideas/all-ideas.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { SearchComponent } from './search/search.component';




const routes: Routes = [
  {path:'recentideas', component:RecentIdeasComponent},
  {path:'modalsuccess', component:ModalSuccessComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'serviceproviderregistration',component:ServiceProviderRegistrationComponent},
  {path:'innovatorregistration',component:InnovatorRegistrartionComponent},
  {path:'login',component:UserLoginComponent},
  {path:'serviceDashboard/:sendEmailId',component:ServiceProviderDashboardComponent},
  {path:'serviceProfile/:sendEmailId',component:ServiceProviderProfileComponent},
  {path:'innovatorDashboard/:sendEmailId',component:InnovatorDashboardComponent},
  {path:'innovatorProfile/:sendEmailId',component:InnovatorProfileComponent},
  // {path:'postIdea/:emailId',component:PostIdeaComponent},
  {path:'nav',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'result/:roles',component:IntelligentServiceComponent},
  {path: 'acceptedSerProviders/:servProviders',component:PostIdeaComponent},
{path:'allIdeas/:emailId',component:AllIdeasComponent},
{path:'ideaDetail/:title',component:IdeaDetailComponent},
{path:'allIdeas',component:AllIdeasComponent},
{path:'search/:idea',component:SearchComponent},


{path:'serviceDashboard',component:ServiceProviderDashboardComponent},  //for trial, remove after use
{path:'innovatorDashboard',component:InnovatorDashboardComponent},

{path:'ideaDetail',component:IdeaDetailComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
