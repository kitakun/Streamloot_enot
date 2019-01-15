import { Callback, IConstructable } from "src/app/Models/UtilsInterfaces";

export interface IMorzeLine {
    /*
     *  Subscribe
     */
    hearing(agent: MorzeAgent): Callback;
    /*
     *  Send data to subscribers
     */
    signal<T extends IMorzeSignal>(eventType: IConstructable<IMorzeSignal>, data: T): void;

}

export interface MorzeAgent {
    /*
     * Proceed recieved data
     */
    hearing<T extends IMorzeSignal>(eventType: IConstructable<IMorzeSignal>, data: T): void;

}

export interface IMorzeSignal {

}