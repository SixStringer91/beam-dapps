import { IOutput } from 'beamApiProps';
import BaseComponent from '../base/base.component';
import './action.scss';
export declare class Value extends BaseComponent {
    role: string | null;
    constructor(output: IOutput, role: string | null);
    render: (output: IOutput) => void;
}
