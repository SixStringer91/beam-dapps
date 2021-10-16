import { IFormState } from 'formProps';
import BaseComponent from '../base/base.component';
export default class ButtonDrop extends BaseComponent {
    setFilename: (text: string) => void;
    fileName: string;
    constructor({ mainSelector, labelSelector, iconPic, iconArrow }: {
        mainSelector: string;
        labelSelector: string;
        iconPic?: string;
        iconArrow?: string;
    });
    setContract: (files: ArrayBuffer, fileName: string) => void;
    informForm: (state: IFormState) => void;
}
