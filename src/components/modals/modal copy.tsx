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
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: QRL<() => void>;
  secondaryActionLabel?: string;
}
export default component$<ModalProps>(
  ({
    isOpen,
    onClose,
    onSubmit,
    title,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
  }) => {
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

    const handleSecondaryAction = $(() => {
      if (disabled || !secondaryAction) {
        return;
      }

      secondaryAction();
    });

    if (!isOpen) {
      return null;
    }
    return (
      <>
        <div
          class="
          justify-center 
          flex 
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
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
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
                {/*header*/}
                <div
                  class="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
                >
                  <button
                    class="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                    w-10 h-10
                  "
                    onClick$={handleClose}
                  >
                    <Closebutton size="24px" />
                  </button>
                  <div class="text-lg font-semibold">{title}</div>
                </div>
                {/*body*/}
                <div class="relative p-6 flex-auto ">
                  <Slot name="body" />
                </div>
                {/*footer*/}
                <div class="flex flex-col gap-2 p-6">
                  <div
                    class="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                  >
                    {secondaryAction && secondaryActionLabel && (
                      <Button
                        disabled={disabled}
                        label={secondaryActionLabel}
                        onClick={handleSecondaryAction}
                      />
                    )}
                    {actionLabel && (
                      <Button
                        disabled={disabled}
                        label={actionLabel}
                        onClick={handleSubmit}
                      />
                    )}
                  </div>
                  <Slot name="footer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);
