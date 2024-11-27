type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback) {
    const callbacks = this.events[eventName] || [];
    callbacks.push(callback);
    this.events[eventName] = callbacks;
  }

  trigger(eventName: string): void {
    const callbacks = this.events[eventName];
    if (!callbacks || !callbacks.length) {
      return;
    }

    callbacks.forEach((callback) => {
      callback();
    });
  }
}
