import { InMemoryCandidatesRepository } from "../../../../test/repositories/InMemoryCandidatesRepository";
import { InMemoryPartiesRepository } from "../../../../test/repositories/InMemoryPartiesRepository";
import { InMemoryUsersRepository } from "../../../../test/repositories/InMemoryUsersRepository";
import { InMemoryVotesRepository } from "../../../../test/repositories/InMemoryVotesRepository";
import { Candidate } from "../../../domain/entities/Candidate";
import { Party } from "../../../domain/entities/Party";
import { User } from "../../../domain/entities/User";
import { Vote } from "../../../domain/entities/Vote";
import { CreateCandidateUseCase } from "../CreateCandidate/CreateCandidateUseCase";
import { CreatePartyUseCase } from "../CreateParty/CreatePartyUseCase";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { CreateVoteUseCase } from "./CreateVoteUseCase";


describe('Create a vote use case', () => {
  
      test('Create a vote', async () => {

          const votesRepository = new InMemoryVotesRepository();
          const candidatesRepository = new InMemoryCandidatesRepository();
          const usersRepository = new InMemoryUsersRepository();
          const partiesRepository = new InMemoryPartiesRepository();
  
          const user = new User({
              name: 'John Doe',
              age: 30,
              gender: 'male',
              login: 'john.doe',
              password: '123'
          });

          const createUserUseCase = new CreateUserUseCase(
            usersRepository
          );
          await createUserUseCase.execute(user);

          const party = new Party({
            name: 'New Era'
          });

          const createPartyUseCase = new CreatePartyUseCase(
            partiesRepository  
          );

          await createPartyUseCase.execute(party);

          const candidate = new Candidate({
            partyId: party.id,
            userId: user.id,
          });

          const createCandidateUseCase = new CreateCandidateUseCase(
            candidatesRepository,
            usersRepository,
            partiesRepository
          );

          await createCandidateUseCase.execute(candidate);
          
          const vote = new Vote({
            candidateId: candidate.id,
          });

          const vote2 = new Vote({
            candidateId: candidate.id,
          });

          const vote3 = new Vote({
            candidateId: candidate.id,
          });

          const createVoteUseCase = new CreateVoteUseCase(
            votesRepository,
            candidatesRepository
          );

          await createVoteUseCase.execute(vote);
          await createVoteUseCase.execute(vote2);
          await createVoteUseCase.execute(vote3);

          expect(votesRepository.votes.length).toBe(3);
      });
});