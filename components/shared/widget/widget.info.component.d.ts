import { APIResponse } from 'beamApiProps';
import BaseComponent from '../base/base.component';
export default class WidgetProps extends BaseComponent {
    value: BaseComponent;
    key: string;
    action: string;
    constructor({ value, key, title, action }: {
        value: string;
        key: string;
        title: string;
        action: string;
    });
    inform: (res: APIResponse) => void;
}
