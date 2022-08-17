import { User } from "../../domain/entities/User";

export interface IUsersRepository {
    save(user: User): Promise<void>;
    findById(id: string): Promise<User | void>;
}