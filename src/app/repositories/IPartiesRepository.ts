import { Party } from "../../domain/entities/Party";


export interface IPartiesRepository {
    save(party: Party): Promise<void>;
    findById(id: string): Promise<Party | void>;
}