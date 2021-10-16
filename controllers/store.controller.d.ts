import { AddObsever, FormDispatch, IFormState } from 'formProps';
export declare class STORE {
    static addObserver: AddObsever;
    static dispatch: FormDispatch;
    static getState: () => IFormState;
    static setApiHandlers: (obj: {
        addObserver: AddObsever;
        dispatch: FormDispatch;
        getRole: () => IFormState;
    }) => void;
}
