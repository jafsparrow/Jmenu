import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { companyData, products } from "./constants";
import CompanyIfo from "~/components/companyifo";
import Subheading from "~/components/subheading";
import ProductList from "~/components/product-list";
import ModifierSelectionModal from "~/components/modals/ModifierSelectionModal";
import { ModalContext } from "~/providers/ModalProvider";

export const useCompanyLoader = routeLoader$(({ params }) => {
  console.log(params);

  return companyData.filter((item) => item.id == +params.companyId);
});

export const userProductsLoader = routeLoader$(({ params }) => {
  const companyId = params.companyId;
  console.log("prodcut route loade", companyId);
  return products;
});
export default component$(() => {
  //   const location = useLocation();
  const companyDetails = useCompanyLoader();
  const productsList = userProductsLoader();

  const modalContext = useContext(ModalContext);

  useVisibleTask$(({ track }) => {
    track(() => modalContext.isOpen);

    document.body.style.overflow = modalContext.isOpen ? "hidden" : "unset";
  });

  return (
    <>
      {/* <div>'companyHome' {JSON.stringify(location.params.companyId)}</div> */}
      <CompanyIfo />
      <div class="px-2">
        <Subheading title="Today's Specials" />
        <ProductList />
      </div>

      <div class="px-2">
        <div class="flex justify-between">
          <Subheading title="Our Popular items" />
          <button class="text-blue-800 px-2 py-1 rounded-md">View More</button>
        </div>

        <ProductList />
      </div>
      {modalContext.isOpen && <ModifierSelectionModal />}
    </>
  );
});
