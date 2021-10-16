import { APIResponse } from 'beamApiProps';
import { IFormState } from 'formProps';
import BaseComponent from '../base/base.component';
import './output_place.scss';
export declare class OutputPlace extends BaseComponent {
    action: string;
    child: BaseComponent;
    constructor(action: string);
    informForm: (state: IFormState) => void;
    reqHandler: (output: string) => void;
    createTx: (reqId: string, data: number[]) => void;
    invokeData: (reqId: string, txId: string) => void;
    inform: (res: APIResponse) => void;
}
