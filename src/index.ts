import { User } from "./User";
import axios from "axios";

const john = new User({id: '6830'})

john.fetch()

const alice = new User({name: 'Alice', age: 23})
alice.save();