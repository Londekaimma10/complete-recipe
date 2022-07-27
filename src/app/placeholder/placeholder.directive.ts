import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appPlaceholder]'
})

export class PlaceHolderDirective{
    viewContainerRef: any;

    constructor(viewContainerRef: ViewContainerRef){}
}