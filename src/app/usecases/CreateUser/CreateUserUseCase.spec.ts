import { InMemoryUsersRepository } from "../../../../test/repositories/InMemoryUsersRepository";
import { User } from "../../../domain/entities/User"
import { CreateUserUseCase } from "./CreateUserUseCase";

describe('Create a User use case', () => {
    it('should be able to create a new User', async () => {

        const user = new User({
            name: "Lucas",
            age: 21,
            gender: "male",
            login: "lucas",
            password: "lucas123"
        });

        const inMemoryUsersRepository = new InMemoryUsersRepository();

        const createUserUseCase = new CreateUserUseCase(
            inMemoryUsersRepository
        );

        const userCreated = createUserUseCase.execute(user);


    });
})