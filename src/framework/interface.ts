import { AxiosPromise } from "axios";
import { Callback } from "./Eventing";

export interface IEventing {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface IAttributes<P> {
  set(updatedData: P): void;
  getAllProps(): P
  get<K extends keyof P>(key: K): P[K];
}

export interface ISync<P> {
  fetch(id: string): AxiosPromise;
  save(data: P): AxiosPromise;
}

export interface HasId {
    id?: string
}