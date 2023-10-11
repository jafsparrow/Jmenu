import { component$ } from "@builder.io/qwik";
import ProductCard from "./product-card";
import type { Product } from "~/common/types/product";

export default component$(() => {
  const product: Product = {
    name: "chicken dum",
    categoryId: 1,
    id: 33,
    image: "",
    code: Math.random(),
    price: 1.3,
    modifierGroups: [
      {
        id: 1234,
        description: "Size",
        isRequired: true,
        modifiers: [
          { name: "Regular", price: 0, isDefault: false },
          { name: "Medium", price: 1.2, isDefault: false },
          { name: "Large", price: 1.6, isDefault: false },
        ],
      },
      {
        id: 2345,
        description: "Spices",
        isRequired: false,
        modifiers: [
          { name: "Extra cheesy", price: 0, isDefault: false },
          { name: "Simple Cheesy", price: 1.2, isDefault: true },
          { name: "Super cool Cheesy", price: 1.6, isDefault: false },
        ],
      },
    ],
  };
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 ">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <ProductCard key={item} product={product} />
      ))}
    </div>
  );
});
