import { Routes } from '@angular/router';
//import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [ 
    {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },

    
    { path: '**', redirectTo: '/auth/login'}
];