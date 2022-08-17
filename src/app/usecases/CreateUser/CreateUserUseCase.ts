import { User } from "../../../domain/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

type CreateUserCaseRequest = {
    name: string;
    login: string;
    password: string;
    age: number;
    gender: string;
}

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(props: CreateUserCaseRequest) {
        const user = new User(props);

        return await this.usersRepository.save(user);
    }
}