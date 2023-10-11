import { $, component$, useContext } from "@builder.io/qwik";
import Backbutton from "./icons/backbutton";
import Carticon from "./icons/carticon";
import { CartContext } from "~/providers/cartprovider";
import { ModalContext } from "~/providers/ModalProvider";

export default component$(() => {
  const cart = useContext(CartContext);
  const dialogContext = useContext(ModalContext);
  const openModifierSelectionDialog = $(() => {
    (dialogContext.modalType = "modifier"), (dialogContext.isOpen = true);
  });
  return (
    <header class="flex justify-between px-2 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 w-full">
      <div class="h-10 w-10 p-2 sm:h-16 sm:w-16">
        <Backbutton />
      </div>
      {cart.getCartTotal(cart.cartItems)}

      <button onClick$={openModifierSelectionDialog}>Modal</button>
      <div class="h-10 w-10 p-2 sm:h-16 sm:w-16">
        <Carticon />
      </div>
    </header>
  );
});
