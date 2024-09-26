import { useEffect, useState } from "react"
import { AlertModal, AlertModalProps } from "./alert-modal"
import { ActionModalProps, ActionModalType } from "./types"
import { AlertModalActionState, SubscribeType } from "./action-state"
import { Modal } from "./modal"

export const ModalHost = () => {
  const [modals, setModals] = useState<ActionModalProps[]>([])

  const removeModal = (id: number) => {
    setModals((modalList) => (
      modalList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            props: {
              ...item.props,
              open: false
            }
          }
        }
        return item
      })
    ));

    setTimeout(() => {
      setModals((modalList) => {
        const newModals = modalList.filter(modal => modal.id !== id);
        return newModals
      });
    }, 300)
  }

  const addModal = (modal: ActionModalProps) => {
    setModals((modalList) => {
      if (modalList.find(item => modal.id === item.id)) {
        return modalList.map(item => {
          if (item.id === item.id) {
            return {
              ...modal,
              props: {
                ...item.props,
                ...modal.props,
              }
            }
          }
          return item
        })
      } else {
        return [...modalList, {
          ...modal,
          props: {
            ...modal.props,
            open: true
          }
        }]
      }
    })
  }

  useEffect(() => {
    const unsubscribe = AlertModalActionState.subscribe((modal, type) => {
      // Add or Update
      if (type === SubscribeType.Add || type === SubscribeType.Update) {
        addModal(modal)
      } else {
        removeModal(modal.id)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  console.log('modals', modals)

  return (
    <>
      {modals.map(({ id, type, props }) => {
        if (type === ActionModalType.AlertModal) {
          return (
            <AlertModal
              key={id}
              onClose={() => {
                props.onClose?.()
                removeModal(id)
              }}
              {...props}
            />
          )
        }
        if (type === ActionModalType.Modal) {
          return (
            <Modal
              key={id}
              onOpenChange={open => {
                props.onOpenChange?.(open)
                if (open === false) {
                  removeModal(id)
                }
              }}
              {...props}
            />
          )
        }
      })}
    </>
  )
}

export const modalAction = {
  confirm: AlertModalActionState.confirm,
  alert: AlertModalActionState.alert,
  open: AlertModalActionState.modal,
}
