import { AddObserversType, BeamApiHandlers, CallApiType, DeleteObserverType, InitShaderType } from 'beamApiProps';
export declare class BEAM {
    static addObservers: AddObserversType;
    static callApi: CallApiType;
    static initShader: InitShaderType;
    static deleteObserver: DeleteObserverType;
    static setApiHandlers: (obj: BeamApiHandlers) => void;
}
