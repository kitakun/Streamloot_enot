import { Component, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { AttributeService } from 'src/app/services/attribute-service.service';
import { ModalService } from './modal.service';
import { IModalDialog } from './imodal.interface';

@Component({
    selector: 'es-modal',
    templateUrl: './modal.component.html',
    styleUrls: [
        './modal.component.scss'
    ]
})
//http://jasonwatmore.com/post/2018/05/25/angular-6-custom-modal-window-dialog-box
export class ModalComponent implements OnInit, OnDestroy, IModalDialog {

    @Input() id: string;
    @Input('width') minWidth: number;

    private element: any;

    public visible: boolean = false;

    constructor(
        private readonly modalService: ModalService,
        private readonly el: ElementRef) {
        this.element = this.el.nativeElement;
    }

    ngOnInit(): void {

        if (this.minWidth) {
            this.element.firstChild.firstChild.style['min-width'] = this.minWidth + 'px';
        }

        const modal: IModalDialog = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        if (true) {
            this.element.addEventListener('click', function (e: any) {
                if (e.target.className.indexOf('modal') >= 0) {
                    modal.close();
                }
            });
        }

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.visible = false;
        this.element.remove();
    }

    // open modal
    public open(): void {
        //this.element.style.display = 'block';
        this.visible = true;
        document.body.classList.add('modal-open');
    }

    // close modal
    public close(): void {
        //this.element.style.display = 'none';
        this.visible = false;
        document.body.classList.remove('modal-open');
    }
}