import { Injectable } from "@angular/core";
import { IModalDialog } from "./imodal.interface";

@Injectable({
    providedIn: 'root'
})
export class ModalService implements IModalService {
    private modals: Array<IModalDialog> = new Array<IModalDialog>();

    add(modal: IModalDialog) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        // open modal specified by id
        let modal: IModalDialog = this.modals.filter(x => x.id === id)[0];
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        let modal: IModalDialog = this.modals.filter(x => x.id === id)[0];
        modal.close();
    }
}

export interface IModalService {

    add(modal: IModalDialog);

    remove(id: string);

    open(id: string);

    close(id: string);

}