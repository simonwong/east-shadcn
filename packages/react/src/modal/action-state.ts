import { AlertModalProps } from "./alert-modal";
import { ModalProps } from "./modal";
import { ActionModalProps, ActionModalType } from "./types";


export enum SubscribeType {
  Add,
  Delete,
}
type SubscriberFn = (state: ActionModalProps, type: SubscribeType) => void

class Observer {
  #subscribers: Array<SubscriberFn>;
  #modalCount = 0;

  constructor() {
    this.#subscribers = [];
  }

  subscribe = (subscriber: SubscriberFn) => {
    this.#subscribers.push(subscriber);

    return () => {
      const index = this.#subscribers.indexOf(subscriber);
      this.#subscribers.splice(index, 1);
    };
  };

  #publish = (data: ActionModalProps, type: SubscribeType) => {
    this.#subscribers.forEach((subscriber) => subscriber(data, type));
  };

  #addAlertModal = (data: AlertModalProps) => {
    const actionData = {
      props: data,
      type: ActionModalType.AlertModal,
      id: ++this.#modalCount,
    }
    this.#publish(actionData, SubscribeType.Add);

    return {
      actionData,
      close: () => {
        this.#publish(actionData, SubscribeType.Delete)
      }
    }
  };

  #addModal = (data: ModalProps) => {
    const actionData = {
      props: data,
      type: ActionModalType.Modal,
      id: ++this.#modalCount,
    }
    this.#publish(actionData, SubscribeType.Add);

    return {
      actionData,
      close: () => {
        this.#publish(actionData, SubscribeType.Delete)
      }
    }
  };

  confirm = (data: AlertModalProps) => {
    return this.#addAlertModal(data);
  };

  alert = (data: AlertModalProps) => {
    return this.#addAlertModal(data);
  };

  modal = (data: ModalProps) => {
    return this.#addModal(data);
  };
}

export const AlertModalActionState = new Observer();
