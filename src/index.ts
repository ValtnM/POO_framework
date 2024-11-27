import { User } from "./User";
import axios from "axios";

const user = new User({name: 'John Doe', age: 99})

user.on('save', () => console.log('Sauvegarde des données'))

user.save()
// user.trigger('change')