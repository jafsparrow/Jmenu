import type { QRL } from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";
import type { CartItem } from "~/common/types/cartitem";

export type CartStore = {
  cartItems: CartItem[];
  getCartTotal: any;
  getCartCount: QRL<(this: CartStore) => void>;
};

export const CartContext = createContextId<CartStore>("cart");
