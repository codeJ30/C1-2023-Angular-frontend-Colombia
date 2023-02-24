import { IAccountInterface } from './account.interface';
import { INewUser } from './new-user.interface';
import { IUsers } from './users.interface';
export interface ITransfer{
    id:string;
    amount: number;
    income : IAccountInterface;
    outcome: IAccountInterface;
    reason : string;
    date_time : number | Date;
}