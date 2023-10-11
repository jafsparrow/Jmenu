import { component$ } from "@builder.io/qwik";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  errors?: string;
}
export default component$<InputProps>(
  ({ id, label, type, disabled, formatPrice, required, errors }) => {
    return (
      <div class="w-full relative">
        {formatPrice && (
          <div class="text-neutral-700 absolute top-5 left-2">dolar</div>
        )}

        <input
          type="text"
          id={id}
          disabled={disabled}
          placeholder="  "
          class={`
        peer
        w-full
        p-4
        pt-6
        font-light
        bg-white
        border-2
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${formatPrice ? "pl-9" : "pl-4"}
        ${errors ? "border-rose-500" : "border-neutral-300"}
        ${errors ? "focus:border-rose-500" : "focus:border-black"}
            `}
        />
        <label
          class={`
                absolute
                text-md
                duration-150
                transform
                -translate-y-3
                top-5
                z-10
                origin-[0]
                ${formatPrice ? "left-9" : "left-4"}
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ${errors ? "text-rose-500" : "text-zinc-400"}
                `}
        >
          {label}
        </label>
      </div>
    );
  }
);
