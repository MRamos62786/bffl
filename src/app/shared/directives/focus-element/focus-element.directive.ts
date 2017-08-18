import {
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

/**
 * Provides a way to set focus to a specified element. This is webworker safe.
 *
 * In template:
 *      <input type="text" [focus]="emitter" />
 *
 * In code:
 *  @Component(...)
 *  export class myComponent {
 *      emitter: EventEmitter<void>;
 *
 *      setFocus() {
 *          emitter.emit();
 *      }
 *
 *      ...
 *  }
 *
 * @export
 * @class FocusElementDirective
 * @implements {OnChanges}
 * @implements {OnDestroy}
 */
@Directive({ selector: '[focus]' })
export class FocusElementDirective implements OnChanges, OnDestroy {

    private sub: Subscription;
    @Input() focus: EventEmitter<void>;

    constructor(private element: ElementRef) { }

    ngOnChanges(changes: SimpleChanges) {

        this.unsub();
        const emitter = (<EventEmitter<void>>changes['focus'].currentValue);

        if (emitter) {
            this.sub = emitter.subscribe(() => {
                /*
                 * Was using the renderer to make this webworker safe, but it was deprecated...
                 *    this.rederer.invokeElementMethod(this.element.nativeElement, 'focus', []);
                 * https://github.com/angular/angular/issues/15674
                 *
                 * One solution described in the issue above is:
                 *
                 * Possible solution for all of you is to create something like MyFocusService with method focus.
                 *   Then provide different implementation for you AppModuleBrowser and AppModuleServer.
                 *
                 *   Like {provide: MyFocusService, useClass: MyServerFocusServer}.
                 *
                 *  Where MyServerFocusServer implements empty function focus.
                 *
                 * NOTE: No longer webworker safe!!
                 */
                setTimeout(() => this.element.nativeElement.focus(), 0);
            });
        }
    }

    ngOnDestroy() {
        this.unsub();
    }

    unsub() {
        if (this.sub) {
            this.sub.unsubscribe();
            this.sub = null;
        }
    }
}
