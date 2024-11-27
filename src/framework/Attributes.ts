export class Attributes<P extends object> {
  constructor(private data: P) {}

  get = <K extends keyof P>(propName: K): P[K] => {
    return this.data[propName];
  };

  set(updatedData: Partial<P>): void {
    Object.assign(this.data, updatedData);
  }

  getAllProps(): P {
    return this.data;
  }
}
