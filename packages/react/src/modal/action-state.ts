import { AlertModalProps } from "./alert-modal";
import { ActionModalProps } from "./types";

let MODAL_COUNT = 0

class Observer {
  subscribers: Array<(state: ActionModalProps) => void>;

  constructor() {
    this.subscribers = [];
  }

  subscribe = (subscriber: (state: ActionModalProps) => void) => {
    this.subscribers.push(subscriber);

    return () => {
      const index = this.subscribers.indexOf(subscriber);
      this.subscribers.splice(index, 1);
    };
  };

  publish = (data: ActionModalProps) => {
    this.subscribers.forEach((subscriber) => subscriber(data));
  };

  addModal = (data: AlertModalProps) => {
    this.publish({
      ...data,
      id: ++MODAL_COUNT,
    });
  };

  confirm = (data: AlertModalProps) => {
    this.addModal(data);
  };

  alert = (data: AlertModalProps) => {
    this.addModal(data);
  };
}

export const ActionState = new Observer();
