import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'team', component: TeamComponent},



  // All routing ust be upper 
  // { path: '404', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
