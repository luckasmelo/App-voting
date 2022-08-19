import { InMemoryUsersRepository } from "../../../../test/repositories/InMemoryUsersRepository";
import { User } from "../../../domain/entities/User";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { FindUserUseCase } from "./FindUserUseCase";

describe("Find a User use case", () => {
    test('testing with user created is equal to user found', async () => {
        
        const usersRepository = new InMemoryUsersRepository();
        const createUserUseCase = new CreateUserUseCase(usersRepository);
        const user = new User({
            name: "Lucas",
            age: 21,
            gender: 'male',
            login: 'lucas123',
            password: 'lucas123'
        });

        const user1 = new User({
            name: "Jubileu",
            age: 42,
            gender: 'male',
            login: 'jubileu123',
            password: 'jubileu123'
        });

        createUserUseCase.execute(user);
        createUserUseCase.execute(user1);
        
        const findUserUseCase = new FindUserUseCase(usersRepository);
        const searchedUser = await findUserUseCase.execute(user.id)
    
        expect(searchedUser).toEqual(user);
        expect(usersRepository.users.length).toBe(2)
    });
        
});
