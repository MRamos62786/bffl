import { Routes, RouterModule } from '@angular/router';
// import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';
// -- The following import should be removed once this issue is resolved
// https://github.com/Microsoft/TypeScript/issues/9944
import { ModuleWithProviders } from '@angular/core';
export const DONOTUSE: ModuleWithProviders = null;
// --

const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule',
    },
    {
        path: 'rulebook',
        loadChildren: 'app/rulebook/rulebook.module#RulebookModule',
    },
    {
        path: 'teams',
        loadChildren: 'app/teams/teams.module#TeamsModule',
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(appRoutes);
