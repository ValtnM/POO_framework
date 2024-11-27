import { UserProps } from "./User";

class Attributes {
  constructor(public data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(updatedData: Partial<UserProps>): void {
    Object.assign(this.data, updatedData);
  }
}
