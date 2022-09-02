import { Vote } from "../../../domain/entities/Vote";
import { ICandidatesRepository } from "../../repositories/ICandidatesRepository";
import { IVotesRepository } from "../../repositories/IVotesRepository";

export class CreateVoteUseCase {
  constructor(
    private votesRepository: IVotesRepository,
    private candidatesRepository: ICandidatesRepository
  ) {}

  async execute(vote: Vote): Promise<void> {
    const candidate = await this.candidatesRepository.findById(vote.props.candidateId);
    if(!candidate)throw new Error('Candidate not found');

    await this.votesRepository.save(vote);
  }
}