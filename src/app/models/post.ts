export class post{
    _id?: number;
    title:string;
    descrip:string;
    write:string;

    constructor(nombre: string, email:string, password:string){
        this.title= nombre;
        this.descrip = email;
        this.write = password;
    }
}