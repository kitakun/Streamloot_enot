export interface Callback {
    (): void;
}

export interface Size {
    width: number;
    height: number;
}

export interface IError {
    error: IErrorMessage;
    message: string;
}

export interface IErrorMessage {
    message: string;
}

export interface IConstructable<T> {
    new(...args: any[]): T;
}