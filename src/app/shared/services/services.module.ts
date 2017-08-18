
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { LoggingService } from './logging.service';

const PROVIDERS = [
    CanDeactivateGuard,
    LoggingService
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
