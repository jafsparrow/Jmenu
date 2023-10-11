import type { QRL } from "@builder.io/qwik";
import {
  $,
  Slot,
  component$,
  useContext,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import Button from "../Button";
import Closebutton from "../icons/closebutton";
import { ModalContext } from "~/providers/ModalProvider";

interface ModalProps {
  isOpen?: boolean;
  onClose: QRL<() => void>;
  onSubmit: QRL<() => void>;
  title?: string;
  actionLabel?: string;
  disabled?: boolean;
}
export default component$<ModalProps>(
  ({ isOpen, onClose, onSubmit, title, actionLabel, disabled }) => {
    const showModal = useSignal(false);
    const modalContext = useContext(ModalContext);
    useVisibleTask$(({ track }) => {
      track(() => modalContext.isOpen);
      showModal.value = modalContext.isOpen;
    });

    const handleClose = $(() => {
      if (disabled) {
        return;
      }
      showModal.value = false;
      onClose();
      // setTimeout(() => {
      //   onClose();
      // }, 300);
    });

    const handleSubmit = $(() => {
      if (disabled) {
        return;
      }

      onSubmit();
    });

    if (!isOpen) {
      return null;
    }
    return (
      <>
        <div
          class="
          flex 
          items-end
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
    
        "
        >
          <div
            class="
          relative 
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          w-full
          mx-auto 
          lg:h-auto
          md:h-auto
          "
          >
            {/*content*/}
            <div
              class={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
            >
              <div
                class="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
              >
                <button
                  class="
                    z-50
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-4 top-4
                    w-10 h-10
                    bg-white/70
                    rounded-full
                    text-white
                  "
                  onClick$={handleClose}
                >
                  <Closebutton size="24px" />
                </button>
                {/*body*/}

                <div class="relative p-6 flex-auto ">
                  <Slot name="body" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);
