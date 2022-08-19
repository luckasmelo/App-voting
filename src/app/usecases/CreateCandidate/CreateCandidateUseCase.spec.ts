import { InMemoryCandidatesRepository } from "../../../../test/repositories/InMemoryCandidatesRepository";
import { InMemoryPartiesRepository } from "../../../../test/repositories/InMemoryPartiesRepository";
import { InMemoryUsersRepository } from "../../../../test/repositories/InMemoryUsersRepository";
import { Candidate } from "../../../domain/entities/Candidate";
import { Party } from "../../../domain/entities/Party";
import { User } from "../../../domain/entities/User";
import { CreateCandidateUseCase } from "./CreateCandidateUseCase";


describe('Create candidate use case', () => {

    test('Create candidate', async () => {
        const candidatesRepository = new InMemoryCandidatesRepository();
        const partiesRepository = new InMemoryPartiesRepository();
        const usersRepository = new InMemoryUsersRepository();

        const user = new User({
            name: 'John Doe',
            age: 30,
            gender: 'Male',
            login: 'johnDoe',
            password: '123'
        });


        const party = new Party({name: 'New Era'});

        const candidate = new Candidate({
            partyId: party.id,
            userId: user.id,
        });
        
        const createCandidateUseCase = new CreateCandidateUseCase(candidatesRepository, usersRepository, partiesRepository);
        await createCandidateUseCase.execute(candidate);
    });

});