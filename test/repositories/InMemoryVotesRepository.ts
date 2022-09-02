import { IVotesRepository } from "../../src/app/repositories/IVotesRepository";
import { Vote } from "../../src/domain/entities/Vote";


export class InMemoryVotesRepository implements IVotesRepository {
    public votes: Vote[] = [];

    async save(vote: Vote): Promise<void> {
        this.votes.push(vote);
    }
}
