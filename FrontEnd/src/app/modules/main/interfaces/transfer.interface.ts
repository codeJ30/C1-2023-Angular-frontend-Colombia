import { INewUser } from './new-user.interface';
import { IUsers } from './users.interface';
export interface ITransfer{
    id:string;
    amount: number;
    inCome : IUsers;
    outCome: IUsers;
    reason : string;
    dateTime : number | Date;
}