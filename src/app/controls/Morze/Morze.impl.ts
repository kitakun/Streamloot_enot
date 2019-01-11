import { IMorzeLine, MorzeAgent, IMorzeSignal } from "./Morze.interface";
import { Callback, IConstructable } from "src/app/Models/UtilsInterfaces";

export class MorzeIntance implements IMorzeLine {

    private readonly _agents: Array<MorzeAgent>;

    constructor() {
        this._agents = new Array<MorzeAgent>();
    }

    public hearing(agent: MorzeAgent): Callback {
        this._agents.push(agent);

        return () => this._agents.filter(a => a != agent);
    }

    public signal<T>(eventType: IConstructable<IMorzeSignal>, data: T): void {
        this._agents.forEach(a => a.hearing<T>(eventType, data));
    }
}