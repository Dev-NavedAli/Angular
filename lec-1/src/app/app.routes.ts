import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent }
];
