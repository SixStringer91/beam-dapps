import { DeleteObserverType } from 'beamApiProps';
import { AddObsever, FormDispatch, IFormState } from 'formProps';
import { ActionTypes } from './action_creators';
export declare class Store {
    private readonly observers;
    private state;
    constructor();
    addObserver: AddObsever;
    deleteObserver: DeleteObserverType;
    notifyAll: () => void;
    dispatch: FormDispatch;
    getRole: () => IFormState;
    reducer: (obj: ActionTypes) => void;
}
