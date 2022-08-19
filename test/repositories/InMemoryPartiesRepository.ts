import { IPartiesRepository } from "../../src/app/repositories/IPartiesRepository";
import { Party } from "../../src/domain/entities/Party";


export class InMemoryPartiesRepository implements IPartiesRepository {
    public parties: Party[] = [];

    async save(party: Party): Promise<void> {
        this.parties.push(party);
    }

    async findById(id: string): Promise<Party | void> {
        return this.parties.find(p => p.id === id);
    }
}