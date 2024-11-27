import { User, UserProps } from "./user/User";
import { Collection } from "./framework/Collection";

const collection = User.buildCollection()

collection.fetch()
console.log(collection.models);

