import {
  component$,
  useSignal,
  useContext,
  $,
  useStore,
  useTask$,
  useComputed$,
  useVisibleTask$,
} from "@builder.io/qwik";
import Modal from "./modal";
import { ModalContext } from "~/providers/ModalProvider";
import { ProductContext } from "~/providers/products.provider";
import type { CartItem } from "~/common/types/cartitem";
import type { Modifier } from "~/common/types/product";

export default component$(() => {
  const isLoading = useSignal(false);
  const modalContext = useContext(ModalContext);
  const isOpen = modalContext.isOpen && modalContext.modalType == "modifier";
  const productContext = useContext(ProductContext);
  const cartItemStore = useStore<{ cartItem: CartItem }>({
    cartItem: {
      productCode: 1,
      appliedModifiers: [],
      count: 1,
      price: 1,
      productId: 1,
      productName: "",
      total: 0,
    },
  });

  const modiferSelectionStore = useStore<{
    [key: string]: Modifier;
  }>({});

  useTask$(({ track, cleanup }) => {
    const selectedProduct = track(() => productContext.selectedProduct);
    console.log("current selected product", selectedProduct);
    if (selectedProduct) {
      const defaultModifiers: Modifier[] = [];
      selectedProduct.modifierGroups!.forEach((modifierGroup) => {
        modifierGroup.modifiers!.forEach((option) => {
          if (option.isDefault) {
            defaultModifiers.push(option);
            modiferSelectionStore[modifierGroup.id!.toString()] = { ...option };
          }
        });
      });

      cartItemStore.cartItem = {
        productName: selectedProduct!.name,
        price: selectedProduct!.price,
        count: 1,
        appliedModifiers: defaultModifiers,
        productCode: selectedProduct!.code,
        productId: selectedProduct!.id,
        total: selectedProduct!.price,
      };
    }

    cleanup(() => console.log("celarnup called"));
  });

  useVisibleTask$(() => console.log("ima aslfjalsdfj visble"));

  useVisibleTask$(({ track }) => {
    track(() => modiferSelectionStore);
    console.log("modifier selections store track should change pritn");
  });

  const total = useComputed$(() => {
    return (
      cartItemStore.cartItem.count *
      (cartItemStore.cartItem.price +
        cartItemStore.cartItem.appliedModifiers.reduce(
          (val, item) => val + item.price,
          0
        ))
    );
  });

  const handleClose = $(() => {
    modalContext.isOpen = false;
  });

  const handleSubmit = $(() => {
    modalContext.isOpen = false;
  });

  return (
    <>
      {isOpen && (
        <Modal
          disabled={isLoading.value}
          isOpen={isOpen}
          title="Product Selection Info"
          onClose={handleClose}
          onSubmit={handleClose}
        >
          <div q:slot="body">
            {productContext.selectedProduct && (
              <div>
                <div
                  class="bg-[url('https://assets.cntraveller.in/photos/627a4112cbc04ca509426501/16:9/w_960,c_limit/Vegetarian%20South%20Indian%20breakfast%20thali%20-%20Idli%20vada%20sambar%20chutney%20-%20Image%20ID%202H3783R%20(RF).jpg')]
     aspect-video bg-cover"
                ></div>
                <div class="text-2xl">
                  {productContext.selectedProduct.name}
                </div>

                <div class="py-2">
                  {productContext.selectedProduct.modifierGroups!.map(
                    (item, index) => (
                      <div key={`modifier${index}`}>
                        <div class="flex justify-between font-bold">
                          <div>{item.description}</div>
                          <div>
                            {JSON.stringify(
                              cartItemStore.cartItem.appliedModifiers.find(
                                (element) => element.id == item.id
                              )
                            )}
                          </div>
                          <div
                            class={`${
                              modiferSelectionStore[item.id.toString()]
                                ? "text-green-800"
                                : "text-black"
                            } font-semibold`}
                          >
                            {item.isRequired ? "Required" : "Optional"}
                          </div>
                        </div>
                        <hr />

                        <div class="py-2 bg-white">
                          {item.modifiers!.map((option, oindex) => (
                            <div
                              key={`option${oindex}`}
                              class="flex justify-between py-1"
                            >
                              <div class="flex gap-2">
                                <input
                                  class="w-6 h-6 pr-3"
                                  type="radio"
                                  name={item.id?.toString()}
                                  id={`${item.id}-${index}-${oindex}`}
                                  value={option.name}
                                  checked={option.isDefault}
                                  // checked={
                                  //   option.isDefault ||
                                  //   selectionStore.selectedModifiers[item.id]
                                  //     ?.name == option.name
                                  // }
                                  onChange$={(event) => {
                                    const key = item.id.toString();
                                    modiferSelectionStore[key] = { ...option };

                                    cartItemStore.cartItem!.appliedModifiers =
                                      Object.values(modiferSelectionStore);
                                    // const tempModifiers = {
                                    //   ...selectionStore.selectedModifiers,
                                    // };
                                    // tempModifiers[key] = { ...option };
                                    // selectionStore.selectedModifiers =
                                    //   tempModifiers;
                                  }}
                                />

                                <div>
                                  <label for={`${item.id}-${index}-${oindex}`}>
                                    {option.name}
                                  </label>
                                </div>
                              </div>
                              <div>
                                {option.price == 0 ? "" : `+ ${option.price}`}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}

                  <div class="flex gap-4 justify-between mt-2">
                    <div class="flex gap-2 items-center">
                      <button
                        class="rounded-full w-7 h-7 bg-gray-400 flex justify-center items-center font-bold"
                        onClick$={() => {
                          if (cartItemStore.cartItem!.count != 1) {
                            cartItemStore.cartItem!.count =
                              cartItemStore.cartItem!.count - 1;
                          }
                        }}
                      >
                        -
                      </button>
                      <div>
                        <input
                          type="number"
                          value={cartItemStore.cartItem?.count}
                          class="w-16 text-center  p-2 "
                          onChange$={(event) => {
                            cartItemStore.cartItem!.count = Number(
                              event.target.value
                            );
                          }}
                        />
                      </div>
                      <button
                        class="rounded-full w-7 h-7 bg-gray-400 flex justify-center items-center font-bold"
                        onClick$={() =>
                          (cartItemStore.cartItem!.count =
                            cartItemStore.cartItem!.count + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      class="bg-black text-white  w-full "
                      onClick$={handleSubmit}
                      // disabled={
                      //   Object.keys(modiferSelectionStore).length == 0
                      //     ? true
                      //     : false
                      // }
                    >
                      ADD for{" "}
                      <span class="font-bold">{total.value.toFixed(3)}</span>{" "}
                      OMR
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
});

// const selectionStore = useStore<{
//   count: number;
//   selectedModifiers: { [key: string]: { name: string; price: number } };
// }>({ count: 1, selectedModifiers: {} });

// useVisibleTask$(({ track }) => {
//   console.log("visible task log");
//   const selectedProduct = track(() => productContext.selectedProduct);
//   itemTotalSignal.value = selectedProduct ? selectedProduct.price : 0;
//   if (selectedProduct) {
//     console.log("this far?");
//     selectedProduct.modifierGroups!.forEach((modifierGroup) => {
//       modifierGroup.modifiers!.forEach((option) => {
//         if (option.isDefault) {
//           // if (!modifierGroup.id) return;
//           const key = modifierGroup.id.toString();
//           console.log("have I reached this far?");
//           selectionStore.selectedModifiers[key] = { ...option };
//         }
//       });
//     });
//   }
// });

// useVisibleTask$(({ track }) => {
//   const count = track(() => selectionStore.count);
//   const productPrice = productContext.selectedProduct
//     ? productContext.selectedProduct.price
//     : 0;
//   itemTotalSignal.value =
//     productPrice *
//     Object.values(selectionStore.selectedModifiers).reduce(
//       (sum, item) => sum + item.price,
//       0
//     ) *
//     count;
// });

// useVisibleTask$(({ track }) => {
//   const selectedModifiers = track(() => selectionStore.selectedModifiers);
//   console.log("am I running ...???");
//   const productPrice = productContext.selectedProduct
//     ? productContext.selectedProduct.price
//     : 0;
//   itemTotalSignal.value =
//     productPrice *
//     Object.values(selectedModifiers).reduce(
//       (sum, item) => sum + item.price,
//       0
//     ) *
//     selectionStore.count;
// });
