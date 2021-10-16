import { APIResponse } from 'beamApiProps';
import { IFormState } from 'formProps';
import { Tags } from '../../../constants/html_elements';
declare type HTMLAttributes = {
    [key: string]: string;
};
export default class BaseComponent {
    readonly element: HTMLElement;
    inform?: (res: APIResponse) => void;
    informForm?: (obj: IFormState) => void;
    constructor(tag: Tags, styles?: string[]);
    get classList(): DOMTokenList;
    get style(): CSSStyleDeclaration;
    get dataset(): DOMStringMap;
    set textContent(str: string);
    set innerHTML(str: string);
    initDom: (node: BaseComponent) => (text: string) => void;
    insertFirst: (component: BaseComponent | HTMLElement) => void;
    append: (...args: (BaseComponent | HTMLElement)[]) => void;
    remove: (...args: BaseComponent[]) => void;
    replace: (component: BaseComponent | HTMLElement) => void;
    removeAll: () => void;
    setAttributes: (obj: HTMLAttributes) => void;
}
export {};
