import { IMorzeSignal } from "src/app/shared/Morze/Morze.interface";

export class AttributeSelectorEventRequest implements IMorzeSignal, IAttributeSelectorEventRequest {
    public checkValidation?: boolean;

    constructor(options?: IAttributeSelectorEventRequest) {
        if (options) {
            this.checkValidation = options.checkValidation ? true : false;
        }
    }
}

interface IAttributeSelectorEventRequest {
    checkValidation?: boolean;
}