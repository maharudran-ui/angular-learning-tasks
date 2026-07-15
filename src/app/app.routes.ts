import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Reports } from './pages/reports/reports';
import { Settings } from './pages/settings/settings';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },


  {
    path: 'about',
    component: About
  },

  {
    path: 'contact',
    component: Contact
  },

 
  {
    path: 'dashboard',
    component: Dashboard,

    children: [

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        component: Home
      },

      {
        path: 'profile',
        component: Profile
      },

      {
        path: 'reports',
        component: Reports
      },

      {
        path: 'settings',
        component: Settings
      }

    ]

  }

];