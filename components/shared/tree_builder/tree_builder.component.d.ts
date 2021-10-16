import { ResponseResultType } from 'beamApiProps';
import BaseComponent from '../base/base.component';
import './tree_builder.scss';
declare type TreeValue = string | number | ResponseResultType;
export declare class TreeBuilder extends BaseComponent {
    constructor(result: ResponseResultType, isArray: boolean);
    branchButtonHandler: (e: MouseEvent, component: BaseComponent) => void;
    nextBranchAttributes: (nextBranch: TreeBuilder, value: TreeValue) => BaseComponent[];
    createNewBranch: (value: TreeValue) => BaseComponent;
    createNewValue: (value: TreeValue) => BaseComponent;
    convertValue: (value: TreeValue) => BaseComponent;
    createKey: (key: string, isArray: boolean) => BaseComponent;
    createBracket: (isArray: boolean, isOpen?: boolean | undefined) => BaseComponent;
    getStruct: (result: ResponseResultType, isArray: boolean) => void;
}
export {};
