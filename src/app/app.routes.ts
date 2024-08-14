import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { AddUserComponent } from './components/add-user/add-user.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
},
{
    path: 'about',
    component: AboutComponent,
},
{
    path: 'crypto',
    component: CryptoComponent,
},
{
    path: 'addUser',
    component: AddUserComponent,
},
];
