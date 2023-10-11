import { component$, $, useContext } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import Backbutton from "~/components/icons/backbutton";
import Carticon from "~/components/icons/carticon";
import { CartContext } from "~/providers/cartprovider";
export const userProductDetailsLoader = routeLoader$(({ params }) => {
  console.log(params);
  console.log("product detail route loader at server");
  return `${Math.random()} jafar chembatty`;
});

export default component$(() => {
  //   const location = useLocation();
  //   const productDetails = userProductDetailsLoader();
  const cart = useContext(CartContext);
  const addToCart = $(() => {
    cart.cartItems.push({
      productCode: "33",
      appliedModifiers: [{ code: 1, description: "extra chees", price: 0.3 }],
      productName: "Cheese burger",
      variantSelected: { M: 1.2 },
    });
    console.log(cart);
  });
  return (
    <>
      {/* <div>Product details page{location.params.companyId}</div>
      <div>{productDetails.value}</div> */}
      <div class="h-screen bg-gray-100">
        <div class="h-1/2 bg-slate-800 r">
          <div class="flex justify-between">
            <div class="h-12 w-12 bg-black/70">
              <Backbutton />
            </div>
            <div class="p-2 h-14 flex space-x-3">
              <div class="px-2 border border-yellow-500 bg-black/70 flex items-center justify-center text-white ">
                1.000
              </div>

              <div class="relative">
                <div class="w-10">
                  <Carticon />
                </div>
                <div class="px-1 w-5 h-5 border border-yellow-500 rounded-full bg-red-700 flex justify-center items-center absolute right-0 top-0 text-white">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-2">
          <div class="text-3xl mb-2">Chicken Biriyani</div>
          <div class="bg-white p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              sapiente, eaque amet consequatur officia magnam adipisci suscipit?
              Consequuntur pariatur quis quisquam? Impedit, ipsa iste aliquam
              eligendi dolorum aperiam debitis dignissimos!
            </p>
            <button
              class="bg-yellow-500 text-center p-2 rounded-full"
              onClick$={addToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
