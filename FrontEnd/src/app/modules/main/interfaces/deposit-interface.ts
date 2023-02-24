import { IAccountInterface } from "./account.interface";

export interface IDepositInterface{
    id: string;
    account: IAccountInterface;
    amount: 0;
    dateTime: Date | number;
}