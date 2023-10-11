import { component$, $, useContext } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import type { Product } from "~/common/types/product";
import { ModalContext } from "~/providers/ModalProvider";
import { ProductContext } from "~/providers/products.provider";

export default component$<{ product: Product }>(({ product }) => {
  const location = useLocation();
  const productContext = useContext(ProductContext);
  const modalContext = useContext(ModalContext);
  const handleProductCartBtn = $(() => {
    console.log("before assigning product", product);
    // set the selected product
    productContext.selectedProduct = product;
    // update the dialog context.
    modalContext.modalType = "modifier";
    modalContext.isOpen = true;
  });

  return (
    <div class="bg-white p-2 rounded-md">
      <div class="mb-2">
        <Link href={`/${location.params.companyId}/productdetail`}>
          <div
            class="rounded-md  bg-[url('https://assets.cntraveller.in/photos/627a4112cbc04ca509426501/16:9/w_960,c_limit/Vegetarian%20South%20Indian%20breakfast%20thali%20-%20Idli%20vada%20sambar%20chutney%20-%20Image%20ID%202H3783R%20(RF).jpg')]
     aspect-video flex flex-col bg-cover"
          ></div>
        </Link>
      </div>

      <h6 class=" truncate font-bold">chicken msfsdfsdfsdfasala adfasdfadf</h6>
      <div class="flex items-center text-clip">
        <div class="bg-green-500 p-[1px]">
          <div class="border-[2px] border-white w-2 h-2 flex justify-center items-center p-1"></div>
        </div>
        <div class="px-2">1.300</div>
        <div class="flex-1"></div>

        <button
          class=" bg-gray-300 text-black rounded-md px-2 py-[2px] m-0"
          onClick$={handleProductCartBtn}
        >
          ADD
        </button>
      </div>

      <p class="line-clamp-2 font-extralight text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem
        recusandae mollitia error corporis illo, aspernatur, quae laudantium
        eveniet soluta corrupti quam! Ipsa reiciendis, eum sint vitae illo saepe
        molestiae.
      </p>
    </div>
  );
});
