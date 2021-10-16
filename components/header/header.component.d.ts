import { APIResponse } from 'beamApiProps';
import BaseComponent from '../shared/base/base.component';
import './header.scss';
import ButtonDrop from '../shared/drop_button/button_drop.component';
export default class Header extends BaseComponent {
    headerDrop: ButtonDrop;
    constructor();
    inform: (res: APIResponse) => void;
}
