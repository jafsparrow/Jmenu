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
    <>
      <div class="p-2 bg-blue-300" onClick$={handleProductCartBtn}>
        open dialog
      </div>
      <Link href={`/${location.params.companyId}/productdetail`}>
        <div
          class="rounded-md  bg-[url('https://assets.cntraveller.in/photos/627a4112cbc04ca509426501/16:9/w_960,c_limit/Vegetarian%20South%20Indian%20breakfast%20thali%20-%20Idli%20vada%20sambar%20chutney%20-%20Image%20ID%202H3783R%20(RF).jpg')]
     aspect-square flex flex-col bg-cover"
        >
          <div class="flex p-2">
            <div class="bg-black/60 p-1">
              <div class="border-[3px] border-green-500 w-5 h-5 flex justify-center items-center p-1">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div class="flex-1"></div>
            <div class=" bg-black/60 font-semibold px-2 rounded-tr-md text-white border border-yellow-400">
              1.300
            </div>
          </div>
          <div class="flex-1"></div>
          <div class="bg-black/60 text-white h-10 flex items-center justify-center rounded-b-md text-clip px-2">
            <h6 class=" truncate">chicken msfsdfsdfsdfasala adfasdfadf</h6>
          </div>
        </div>
      </Link>
    </>
  );
});
