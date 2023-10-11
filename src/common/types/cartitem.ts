import type { Modifier } from "./product";

export interface CartItem {
  productId: string | number;
  productCode: number;
  productName: string;
  price: number;
  appliedModifiers: Modifier[];
  total: number;
  count: number;
}
