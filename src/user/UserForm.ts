import { View } from "../framework/View";
import { User, UserProps } from "./User";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveModelClick,
    };
  }

  onSetAgeClick = () => {
    this.model.setRandomAge();
  };
  onSetNameClick = () => {
    const input = document.querySelector(".input-name") as HTMLInputElement;
    if (input) {
      this.model.set({ name: input.value });
    }
  };
  onSaveModelClick = () => {
    this.model.save();
  };

  template(): string {
    return `        
        <div>
            <h1>User Form</h1>
            <input class="input-name" />
            <button class="set-name">Update Name</button>
            <button class="set-age">Random Age</button>
            <button class="save-model">Save</button>
        </div>
        `;
  }
}
