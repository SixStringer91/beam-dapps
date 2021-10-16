import { IActionParams } from 'beamApiProps';
import { ParamPayloadArgsType } from 'formProps';
import BaseComponent from '../base/base.component';
import { ParamsInput } from '../params/params_input.component';
export declare class ValueLabel extends BaseComponent {
    role: string | null;
    private readonly observers;
    private readonly action;
    private params;
    private readonly clear;
    private readonly submit;
    methodAction: BaseComponent;
    constructor(action: [string, IActionParams], index: number);
    actionMenuListener: (e: Event) => void;
    addObserver: (component: ParamsInput) => void;
    setActiveButton: (isActive: boolean) => void;
    notifyAll: () => void;
    paramsObjectCreator: (params: string[]) => IActionParams;
    setParamsValue: (payload: ParamPayloadArgsType) => void;
    argsStringify: (args: {
        [key: string]: string;
    }) => string;
    getArgs: () => string;
}
