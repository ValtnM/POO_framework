import axios from "axios";
import { Eventing } from "./Eventing";
import { IEventing } from "./interface";
import { User, UserProps } from "../user/User";

export class Collection<T, P> {
  models: T[] = [];
  eventing: IEventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: P) => T) {}

  get on() {
    return this.eventing.on;
  }

  get trigger() {
    return this.eventing.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response) => {
      response.data.forEach((data: P) => {
        const model = this.deserialize(data);
        this.models.push(model);
      });
      this.trigger("change");
    });
  }
}
