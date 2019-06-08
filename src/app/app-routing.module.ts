import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {ChatComponent} from './chat/chat.component';
import {CustomerbrowserComponent} from "./customerbrowser/customerbrowser.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'customers', component: CustomerbrowserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
