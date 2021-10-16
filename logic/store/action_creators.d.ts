import { FormActions } from '../../constants/variables';
export declare const setRoleAC: (payload: string | null) => {
    readonly action: FormActions.SET_ROLE;
    readonly payload: string | null;
};
export declare const setOnloadAC: (payload: string) => {
    readonly action: FormActions.SET_ONLOAD;
    readonly payload: string;
};
export declare const deleteOnloadAC: (payload: string) => {
    readonly action: FormActions.DELETE_ONLOAD;
    readonly payload: string;
};
export declare const setFileNameAC: (payload: string) => {
    readonly action: FormActions.SET_FILENAME;
    readonly payload: string;
};
export declare const setTxsAC: (payload: {
    key: string;
    value: string;
}) => {
    readonly action: FormActions.SET_TXS;
    readonly payload: {
        key: string;
        value: string;
    };
};
export declare const removeTxsAC: (payload: string) => {
    readonly action: FormActions.REMOVE_TXS;
    readonly payload: string;
};
export declare type ActionTypes = ReturnType<typeof setRoleAC | typeof setOnloadAC | typeof deleteOnloadAC | typeof setFileNameAC | typeof setTxsAC | typeof removeTxsAC>;
