import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropDown]',
    standalone: true
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;

    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {}

}