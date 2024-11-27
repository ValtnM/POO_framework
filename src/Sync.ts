import axios from "axios";
import { UserProps } from "./User";


class Sync {
    constructor(public data: UserProps){}

    fetch() {
        axios
          .get(`http://localhost:3001/users/${this.get("id")}`)
          .then((response) => {
            this.set(response.data);
          });
      }
    
      save() {
        const id = this.get("id");
        if (id) {
          axios.patch(`http://localhost:3001/users/${id}`, this.data);
        } else {
          axios.post(`http://localhost:3001/users`, this.data);
        }
      }
}