import { Candidate } from "../../../domain/entities/Candidate";
import { ICandidatesRepository } from "../../repositories/ICandidatesRepository";
import { IPartiesRepository } from "../../repositories/IPartiesRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";


export class CreateCandidateUseCase {
    constructor(
        private candidatesRepository: ICandidatesRepository,
        private usersRepository: IUsersRepository,
        private partiesRepository: IPartiesRepository
    ) { }

    async execute(candidate: Candidate): Promise<void> {

        const user = await this.usersRepository.findById(candidate.props.userId);

        if (!user)throw new Error('User not found');

        const party = await this.partiesRepository.findById(candidate.props.partyId);

        if (!party)throw new Error('Party not found');

        await this.candidatesRepository.save(candidate);
    }
}