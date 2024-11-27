import { Attributes } from "../framework/Attributes";
import { Collection } from "../framework/Collection";
import { Eventing } from "../framework/Eventing";
import { Model } from "../framework/Model";
import { Sync } from "../framework/Sync";

export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

const apiUrl = "http://localhost:3001/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new Sync(apiUrl)
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection(apiUrl, User.buildUser);
  }
}
