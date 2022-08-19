import { IUsersRepository } from "../../src/app/repositories/IUsersRepository";
import { User } from "../../src/domain/entities/User";

export class InMemoryUsersRepository implements IUsersRepository {
    public users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async findById(id: string): Promise<User | void> {
        const userResponse = await this.users.find(user => user.id == id);

        return userResponse;
    }
}