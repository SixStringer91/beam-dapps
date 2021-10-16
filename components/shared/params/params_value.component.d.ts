import { IActionParams } from 'beamApiProps';
import BaseComponent from '../base/base.component';
import { ParamsInput } from './params_input.component';
import './params.scss';
export declare class Params extends BaseComponent {
    constructor(params: IActionParams, addObserver: (component: ParamsInput) => void);
    render: (params: IActionParams, addObserver: (component: ParamsInput) => void) => void;
}
