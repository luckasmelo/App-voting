import { Entity } from "../../app/core/domain/Entity";

type PartyProps = {
    name: string;
}


export class Party extends Entity<PartyProps> {

    constructor(props: PartyProps, id?: string) {
        super(props, id);
    }
}