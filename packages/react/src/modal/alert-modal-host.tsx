import { useEffect, useState } from "react"
import { AlertModal } from "./alert-modal"
import { ActionModalProps } from "./types"
import { ActionState } from "./action-state"


export const AlertModalHost = () => {
  const [modals, setModals] = useState<ActionModalProps[]>([])

  useEffect(() => {
    const unsubscribe = ActionState.subscribe((newModal) => {
      setModals((modalList) => ([...modalList, newModal]))
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const removeModal = (id: number) => {
    setTimeout(() => {
      const newModals = modals.filter(modal => modal.id !== id);
      setModals(newModals);
    }, 300)
  }

  return (
    <>
      {modals.map(({id, ...modalProps}) => (
        <AlertModal
          key={id}
          onClose={() => {
            modalProps.onClose?.()
            removeModal(id)
          }}
          // overlayProps={{
          //   className: index > 0 ? 'bg-transparent' : '',
          // }}
          {...modalProps}
        />
      ))}
    </>
  )
}

export const alertModalAction = {
  confirm: ActionState.confirm,
  alert: ActionState.alert,
}
