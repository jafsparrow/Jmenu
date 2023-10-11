import { Organisation } from "~/common/types";
import { Product } from "~/common/types/product";

export const companyData: Organisation[] = [
  {
    name: "Dawar Zadna",
    address: "Oposite to Falaj Nesto",
    caption: "When food is just read Magic",
    id: 111,
    coord: ["9kdd", "diddld"],
    currencyCode: "OMR",
    decimalZeros: 3,
    isRegistrationComplete: true,
    type: ["chinese", "italian", "turkish"],
    logoUrl: "",
    imageUrl: "",
  },
];

export const products: Product[] = [
  {
    name: "Mutton Chapts",
    price: 1.4,
    id: 11,
    code: 33,
    image: "",
    categoryId: 1,
  },
  {
    name: "Chicken Kuruma",
    price: 1.8,
    id: 11,
    code: 33,
    image: "",
    categoryId: 1,
  },
];
