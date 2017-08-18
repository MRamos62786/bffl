import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'mixedCase' })
export class MixedCasePipe implements PipeTransform {
    transform(input: string): string {
        if (!input) {
            return '';
        } else {
            return input.replace(/\w\S*/g, word => `${word.substr(0, 1).toUpperCase()}${word.substr(1).toLowerCase()}`);
        }
    }
}
