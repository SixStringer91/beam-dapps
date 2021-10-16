import { APIResponse } from 'beamApiProps';
import BaseComponent from '../shared/base/base.component';
import './header.scss';
export default class InfoBlock extends BaseComponent {
    constructor();
    inform: (res: APIResponse) => void;
}
