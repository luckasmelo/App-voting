import { ICandidatesRepository } from "../../src/app/repositories/ICandidatesRepository";
import { Candidate } from "../../src/domain/entities/Candidate";


export class InMemoryCandidatesRepository implements ICandidatesRepository {
    public candidates: Candidate[] = [];

    async save(candidate: Candidate): Promise<void> {
        this.candidates.push(candidate);
    }
}