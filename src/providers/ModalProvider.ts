// import type { QRL } from "@builder.io/qwik";

import { createContextId } from "@builder.io/qwik";

export interface Modal {
  modalType: string;
  isOpen: boolean;
  //   onOpen: QRL<() => void>;
  //   onClose: QRL<() => void>;
}
export const ModalContext = createContextId<Modal>("modal");
