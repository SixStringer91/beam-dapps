import { IOutput } from 'beamApiProps';
import { IFormState } from 'formProps';
import BaseComponent from '../shared/base/base.component';
export declare class Form extends BaseComponent {
    action: BaseComponent;
    roleValue: string | null;
    output: IOutput;
    constructor(output: IOutput);
    setRole: (output: IOutput) => string | null;
    informForm: (state: IFormState) => void;
}
