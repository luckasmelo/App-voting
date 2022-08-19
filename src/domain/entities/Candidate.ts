import { Entity } from "../../app/core/domain/Entity";

type CandidateProps = {
    partyId: string;
    userId: string;
}


export class Candidate extends Entity<CandidateProps> {
    constructor(props: CandidateProps, id?: string) {
        super(props, id);
    }
}