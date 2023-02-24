
import { IUsers } from './users.interface';

export interface IAccountInterface{
    id: string;
    balance: number;
    state: boolean;
    customer: IUsers;
    amount: string;
    accountType: {
        id: string;
        name: string;
        state: boolean;
    }
}