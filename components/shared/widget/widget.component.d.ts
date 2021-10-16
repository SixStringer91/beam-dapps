import { APIResponse } from 'beamApiProps';
import BaseComponent from '../base/base.component';
import './widget.scss';
export default class Widget extends BaseComponent {
    action: string;
    removeFromDom: (...args: BaseComponent[]) => void;
    constructor(action: [string, string], callback: (...args: BaseComponent[]) => void);
    removeThis: () => void;
    getTxStatus: (status: string, reqId: string, txId: string) => void;
    inform: (res: APIResponse) => void;
}
