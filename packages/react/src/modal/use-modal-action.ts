import { useEffect, useRef } from "react"
import { modalAction } from "./modal-host"
import { ModalProps } from "./modal"
import { AlertModalProps } from "./alert-modal"


export const useModalAction = (props: ModalProps | AlertModalProps, dependencies: any[] = []) => {
  const modalRef = useRef<{
    modalInstance: ReturnType<typeof modalAction.open> | ReturnType<typeof modalAction.alert> | ReturnType<typeof modalAction.confirm>,
    initProps?: ModalProps | AlertModalProps
  } | null>(null)

  useEffect(() => {
    if (modalRef.current) {
      // props priority
      modalRef.current.modalInstance.update({
        ...modalRef.current.initProps,
        ...props
      })
    }
  }, dependencies)

  // modalProps priority
  const hookModalAction = {
    open: (modalProps?: ModalProps) => {
      const modalIns = modalAction.open({
        ...props,
        ...modalProps,
      })
      modalRef.current = {
        modalInstance: modalIns,
        initProps: modalProps
      }
      return modalIns
    },
    alert: (modalProps?: AlertModalProps) => {
      const modalIns = modalAction.alert({
        ...props,
        ...modalProps,
      })
      modalRef.current = {
        modalInstance: modalIns,
        initProps: modalProps
      }
      return modalIns
    },
    confirm: (modalProps?: AlertModalProps) => {
      const modalIns = modalAction.confirm({
        ...props,
        ...modalProps,
      })
      modalRef.current = {
        modalInstance: modalIns,
        initProps: modalProps
      }
      return modalIns
    },
  }

  return [
    hookModalAction,
    modalRef.current?.modalInstance,
  ] as const
}