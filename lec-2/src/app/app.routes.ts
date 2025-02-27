import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

export const routes: Routes = [

    // { path: 'user', component: UserComponent }
    { path: 'user', loadComponent: () => import('./user/user.component').then((c) => c.UserComponent) }

];
