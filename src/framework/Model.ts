import { HasId, IAttributes, IEventing, ISync } from "./interface";

export class Model<P extends HasId> {
    constructor(
        private attributes: IAttributes<P>,
        private eventing: IEventing,
        private sync: ISync<P>
    ) {}

    get on() {
        return this.eventing.on;
      }
    
      get trigger() {
        return this.eventing.trigger;
      }
    
      get get() {
        return this.attributes.get;
      }
    
      set(updatedData: P): void {
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