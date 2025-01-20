import { create } from 'zustand'

type ContactModalStore = {
  isOpen: boolean
  openContactModal: () => void
  closeContactModal: () => void
}

export const useContactModal = create<ContactModalStore>((set) => ({
  isOpen: false,
  openContactModal: () => set({ isOpen: true }),
  closeContactModal: () => set({ isOpen: false }),
}))