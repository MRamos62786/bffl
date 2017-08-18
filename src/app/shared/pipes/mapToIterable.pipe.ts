import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'mapToIterable' })
export class MapToIterablePipe<K, V> implements PipeTransform {
    transform(map: Map<K, V>) {
        return Array.from(map.entries());
    }
}
