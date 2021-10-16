import BaseComponent from '../base/base.component';
import { ParamsInput } from './params_input.component';
export declare class ParamsLabel extends BaseComponent {
    constructor(param: [string, string], addObserver: (component: ParamsInput) => void);
    createParamName: (key: string, value: string) => BaseComponent;
}
