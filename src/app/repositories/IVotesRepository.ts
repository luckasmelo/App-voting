import { Vote } from "../../domain/entities/Vote";

export interface IVotesRepository {
    save(vote: Vote): Promise<Vote | void>;
}