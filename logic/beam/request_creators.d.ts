import { ApiArgs } from 'beamApiProps';
export declare const RC: {
    submitResult: (id: string, args: string) => ApiArgs;
    createForm: (files: ArrayBuffer) => ApiArgs;
    invokeData: (id: string, data: number[]) => ApiArgs;
    txStatus: (id: string, txId: string) => ApiArgs;
};
