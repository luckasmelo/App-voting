import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<T> {
    readonly _id: string;
    public props: T;

    get id() {
        return this._id;
    }

    constructor(props: T, id?: string) {
        this.props = props;
        this._id = id ?? uuidv4()
    }
}