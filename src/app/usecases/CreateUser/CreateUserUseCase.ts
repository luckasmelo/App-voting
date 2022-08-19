import { User } from "../../../domain/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(props: User) {
        return await this.usersRepository.save(props);
    }
}