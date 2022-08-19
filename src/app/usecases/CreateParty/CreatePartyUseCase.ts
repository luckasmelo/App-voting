import { Party } from "../../../domain/entities/Party";
import { IPartiesRepository } from "../../repositories/IPartiesRepository";


export class CreatePartyUseCase {
    constructor(
        private partiesRepository: IPartiesRepository
    ) { }

    async execute(party: Party): Promise<void> {
        await this.partiesRepository.save(party);
    }
}