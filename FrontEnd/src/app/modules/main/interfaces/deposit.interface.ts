export interface IDeposit {
    id: string,
    account: { 
        balance: number,
        customer: {
            fullName: string,   
            document : string,
        }
    }
    
    
}