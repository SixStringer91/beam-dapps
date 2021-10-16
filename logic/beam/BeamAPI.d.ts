import { PropertiesType } from 'beamApiProps';
import { QWebChannelTransport, QObject } from 'qwebchannel';
import BaseComponent from '../../components/shared/base/base.component';
import { RC } from './request_creators';
declare global {
    interface Window {
        qt: QWebChannelTransport;
        BeamApi: QObject;
    }
}
export declare class BeamAPI {
    private API;
    private contract;
    private readonly observers;
    constructor();
    readonly addObservers: (...components: BaseComponent[]) => void;
    private readonly onApiResult;
    deleteObserver: (component: BaseComponent) => void;
    readonly loadAPI: () => Promise<BeamAPI>;
    readonly initShader: (shader: ArrayBuffer) => void;
    readonly callApi: ({ callID, method, params }: ReturnType<PropertiesType<typeof RC>>) => void;
}
