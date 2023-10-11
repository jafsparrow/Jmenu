import type { Product } from "./product";

export interface Category {
  id: number;
  menuId?: string;
  accountId?: string;
  name: string;
  description?: string;
  archived: boolean;
  products?: Product[] | null;
  alwaysOpen: boolean;
  day?: null;
  openTime?: null;
  closeTime?: null;
  openAllDay?: null;
  hours?: null[] | null;
  adminIndex?: number;
  categoryCode?: number;
}
