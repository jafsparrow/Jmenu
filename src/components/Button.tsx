import type { QRL, QwikMouseEvent } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  label: string;
  onClick: QRL<(e: QwikMouseEvent<HTMLButtonElement>) => void>;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: any;
}

export default component$<ButtonProps>(
  ({ label, disabled, onClick, outline, small, icon }) => {
    return (
      <button
        disabled={disabled}
        onClick$={onClick}
        class={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          w-full
          ${outline ? "bg-white" : "bg-rose-500"}
          ${outline ? "border-black" : "border-rose-500"}
          ${outline ? "text-black" : "text-white"}
          ${small ? "text-sm" : "text-md"}
          ${small ? "py-1" : "py-3"}
          ${small ? "font-light" : "font-semibold"}
          ${small ? "border-[1px]" : "border-2"}
        `}
      >
        {/* {Icon && (
          <Icon
            size={24}
            className="
              absolute
              left-4
              top-3
            "
          />
        )} */}
        {label}
      </button>
    );
  }
);
