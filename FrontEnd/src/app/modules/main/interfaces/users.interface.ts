

export interface IUsers {
   id: string;
   fullName: string,
   document : string,
   documentType : {
      id: string
   },
   email : string,
   phone  : string,
   password : string,
}