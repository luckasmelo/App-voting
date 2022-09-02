import { Candidate } from "../../domain/entities/Candidate";

export interface ICandidatesRepository {
    save(candidate: Candidate): Promise<void>;
    findById(id: string): Promise<Candidate | void>;
}