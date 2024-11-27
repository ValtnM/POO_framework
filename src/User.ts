import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
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
}
