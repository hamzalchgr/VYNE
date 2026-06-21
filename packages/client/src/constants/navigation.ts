export const TOP_LINKS = [
  { label: "Shop All", slug: "shop/shop-all" },
  { label: "Bestsellers", slug: "shop/bestsellers" },
  { label: "New", slug: "shop/new" },
  { label: "Sale", slug: "shop/sale" },
];


const COMMON_CATEGORIES = [
  { label: "T-Shirts", slug: "shop/t-shirts" },
  { label: "Hoodies", slug: "shop/hoodies" },
  { label: "Shorts", slug: "shop/shorts" },
  { label: "Pants", slug: "shop/pants" },
  { label: "Headwear", slug: "shop/headwear" },
];

export const MENU = [
  {
    label: "MEN",
    slug: "men",
    children: [{ label: "All Men", slug: "shop/all" }, ...COMMON_CATEGORIES],
  },
  {
    label: "WOMEN",
    slug: "women",
    children: [{ label: "All Women", slug: "shop/all" }, ...COMMON_CATEGORIES],
  },
];