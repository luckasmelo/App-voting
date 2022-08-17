import { Entity } from "../../app/core/domain/Entity";


type UserProps = {
    name: string;
    login: string;
    password: string;
    gender: string;
    age: number;
}

export class User extends Entity<UserProps> {
    
}
