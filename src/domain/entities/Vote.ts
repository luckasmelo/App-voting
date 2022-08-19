import { Entity } from "../../app/core/domain/Entity";

type VoteProps = {
    candidateId: string;
    userId: string;
}

export class Vote extends Entity<VoteProps> {

    constructor(props: VoteProps, id?: string) {
        super(props, id);
    }

}