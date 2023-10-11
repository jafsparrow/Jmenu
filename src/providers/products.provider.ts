import { createContextId } from "@builder.io/qwik";
import type { Product } from "~/common/types/product";

export interface ProductProvider {
  selectedProduct: Product | null;
}

export const ProductContext = createContextId<ProductProvider>("product");
