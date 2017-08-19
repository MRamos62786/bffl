
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { LoggingService } from './logging.service';
import { TeamsService } from './teams.service';

const PROVIDERS = [
    CanDeactivateGuard,
    LoggingService,
    TeamsService
];

@NgModule({
    imports: [CommonModule],
    providers: PROVIDERS
})
export class ServicesModule {

    static forRoot(): ModuleWithProviders {
        return { ngModule: ServicesModule, providers: PROVIDERS };
    }
}
