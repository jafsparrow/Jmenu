import {
  Slot,
  component$,
  $,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import type { CartItem } from "~/common/types/cartitem";
import ModifierSelectionModal from "~/components/modals/ModifierSelectionModal";
import RegisterModal from "~/components/modals/RegisterModal";
import { ModalContext } from "~/providers/ModalProvider";
import type { CartStore } from "~/providers/cartprovider";
import { CartContext } from "~/providers/cartprovider";
import { ProductContext } from "~/providers/products.provider";

export default component$(() => {
  useContextProvider(
    CartContext,
    useStore({
      cartItems: [],
      getCartTotal: $((cartItems: CartItem[]) => cartItems.length),
      getCartCount: $(function (this: CartStore) {
        return this.cartItems.length;
      }),
    })
  );

  useContextProvider(
    ModalContext,
    useStore({
      isOpen: false,
      modalType: "login",
    })
  );

  useContextProvider(ProductContext, useStore({ selectedProduct: null }));
  return (
    <>
      <div class="bg-gray-100">
        <RegisterModal />

        <Slot />
      </div>
    </>
  );
});
