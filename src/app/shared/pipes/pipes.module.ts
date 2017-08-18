import { NgModule } from '@angular/core';

import { KeysPipe } from './keys.pipe';
import { MapToIterablePipe } from './mapToIterable.pipe';
import { MixedCasePipe } from './mixed-case.pipe';
@NgModule({
    declarations: [
        KeysPipe,
        MapToIterablePipe,
        MixedCasePipe
    ],
    exports: [
        KeysPipe,
        MapToIterablePipe,
        MixedCasePipe
    ]
})
export class PipesModule { }
