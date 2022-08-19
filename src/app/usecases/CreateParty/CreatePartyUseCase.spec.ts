import { InMemoryPartiesRepository } from "../../../../test/repositories/InMemoryPartiesRepository";
import { Party } from "../../../domain/entities/Party";
import { CreatePartyUseCase } from "./CreatePartyUseCase";

describe('Create party use case', () => {

    test('should create a party', async () => {
        const party = new Party({name: 'party name'});
        const partiesRepository = new InMemoryPartiesRepository();
        const createPartyUseCase = new CreatePartyUseCase(partiesRepository);
        await createPartyUseCase.execute(party);
        expect(partiesRepository.parties).toContain(party);
    });

});