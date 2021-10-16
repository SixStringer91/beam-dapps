import { IActionParams } from 'beamApiProps';
import BaseComponent from '../base/base.component';
export declare class ParamsInput extends BaseComponent {
    readonly param: string;
    constructor(param: string, addObserver: (component: ParamsInput) => void);
    valueChanger: (params: IActionParams) => void;
}
