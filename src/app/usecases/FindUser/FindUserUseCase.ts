import { IUsersRepository } from "../../repositories/IUsersRepository";


export class FindUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(id: string) {
        return await this.usersRepository.findById(id);
    }
}