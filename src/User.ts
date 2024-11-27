import { Attributes } from "./Attributes";
import { Callback, Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export class User {
  eventing: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3001/users");
  attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.eventing.on;
  }

  get trigger() {
    return this.eventing.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(updatedData: UserProps): void {
    this.attributes.set(updatedData);
    this.eventing.trigger("change");
  }

  fetch() {
    const id = this.get("id");
    if (!id) {
      throw new Error("No ID provided");
    }
    this.sync.fetch(id).then((response) => this.set(response.data));
  }

  save(): void {
    this.sync.save(this.attributes.getAllProps()).then((response) => {
      this.trigger("save");
    });
  }
}
