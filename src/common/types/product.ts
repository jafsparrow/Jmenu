export interface Product {
  id: number;
  name: string;
  secondaryLanguageName?: string;
  description?: string;
  price: number;
  cost?: number;
  image: string;
  inStock?: boolean;
  hasVariant?: boolean;
  hasModifiers?: boolean;
  isArchived?: boolean;
  isAvailable?: boolean;
  onSale?: boolean;
  categoryId: number;
  video?: string;
  popular?: boolean;
  isSpecial?: boolean;
  printName?: string;
  modifierGroups?: ModifierGroup[] | null;
  variants?: Variant[] | null;
  indexInCategory?: number;
  sortOrder?: number;
  code: number;
  videoUrl?: string;
}

export interface Variant {
  id?: number;
  name: string;
  price: number;
  productId?: number;
}

export interface ProductImage {
  storageName: string;
  downloadUrl: string;
}
export interface ModifierGroup {
  id: number;
  description?: string;
  price?: number;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  printName?: string;
  printModifiersAsItems?: boolean;
  modifiers?: Modifier[];
  isRequired: boolean;
}

export interface Modifier {
  name: string;
  price: number;
  id?: number;
  modifierGroupId?: number;
  isDefault: boolean;
}

// type ModifierProductEntity = Omit<Product, "modifierGroups">;
export type CategoryViseProducts = { [Key: string]: Product[] };

export interface ProductSortData {
  _id: string;
  indexInCategory: number;
}

export interface ProductBoolFieldUpdateData {
  fieldName: string;
  value: boolean;
}

export interface ProductStat {
  count: number;
  name: string;
}
