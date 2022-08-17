import { IUsersRepository } from "../../src/app/repositories/IUsersRepository";
import { User } from "../../src/domain/entities/User";

export class InMemoryUsersRepository implements IUsersRepository {
    public users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async findById(id: string): Promise<any> {
        const userResponse = await this.users.filter(user => user._id == id);
    


        return userResponse;
    }
}